import { type AST, parse } from 'svelte/compiler';
import type { Node } from 'estree';
import { walk } from 'zimmerframe';
import MagicString from 'magic-string';
import { transformClasses } from './transform-classes.js';
import { transformModule } from './transform-module';
import { COMPONENT_MAPPINGS } from '../utility/component-mappings';

function renameComponent(s: MagicString, node: AST.Component, name: string) {
	const adjustedStart = node.start + 1;
	s.update(adjustedStart, adjustedStart + node.name.length, name);
	const componentString = s.original.slice(node.start, node.end);
	const indexOfNonSelfClosingTag = componentString.lastIndexOf('</');
	if (indexOfNonSelfClosingTag === -1 || node.start + indexOfNonSelfClosingTag > node.end) {
		return;
	}
	s.update(node.start + indexOfNonSelfClosingTag + 2, node.start + indexOfNonSelfClosingTag + 2 + node.name.length, name);
}

function transformScript(s: MagicString, script: AST.Script) {
	const content = s.original.slice(script.start, script.end);
	const openingTag = content.match(/^<script[^>]*>/)?.at(0);
	const closingTag = content.match(/<\/script>$/)?.at(0);
	if (!openingTag || !closingTag) {
		throw new Error('Script tags not found in content');
	}
	const codeContent = content.slice(openingTag.length, content.length - closingTag.length);
	const transformed = transformModule(codeContent, {
		fixUnusedIdentifiers: false
	});
	if (!transformed.code.trim()) {
		s.overwrite(script.start, script.end, '');
	} else {
		s.overwrite(script.start, script.end, `${openingTag}${transformed.code}${closingTag}`);
	}
}

function hasRange(node: Node | AST.SvelteNode): node is (Node | AST.SvelteNode) & { start: number; end: number } {
	return 'start' in node && 'end' in node && typeof node.start === 'number' && typeof node.end === 'number';
}

function transformFragment(s: MagicString, fragment: AST.Fragment) {
	walk(
		fragment as AST.SvelteNode,
		{},
		{
			Literal(node, ctx) {
				const parent = ctx.path.at(-1);
				if (typeof node.value === 'string' && node.value !== '' && !(parent && parent.type === 'ImportDeclaration') && hasRange(node)) {
					// Add 1 to the start and subtract 1 from the end to exclude (and thus preserve) the quotes
					s.update(node.start + 1, node.end - 1, transformClasses(node.value).code);
				}
				ctx.next();
			},
			Text(node, ctx) {
				s.update(node.start, node.end, transformClasses(node.data).code);
				ctx.next();
			},
			ClassDirective(node, ctx) {
				if (
					!(node.expression.type === 'Identifier' && !('loc' in node.expression) && node.name === node.expression.name) &&
					hasRange(node)
				) {
					const adjustedStart = node.start + 'class:'.length;
					s.update(adjustedStart, adjustedStart + node.name.length, transformClasses(node.name).code);
				}
				ctx.next();
			},
			Component(node, ctx) {
				if (node.name in COMPONENT_MAPPINGS && hasRange(node)) {
					renameComponent(s, node, COMPONENT_MAPPINGS[node.name]);
				}
				ctx.next();
			}
		}
	);
	return {
		code: s.toString()
	};
}

function transformSvelte(code: string) {
	const s = new MagicString(code);
	const root = parse(code, {
		modern: true
	});
	if (root.module) {
		transformScript(s, root.module);
	}
	if (root.instance) {
		transformScript(s, root.instance);
	}
	transformFragment(s, root.fragment);
	return {
		code: s.toString()
	};
}

export { transformSvelte };
