import { transformClasses } from './transform-classes.js';
import { COMPONENT_MAPPINGS } from '../utility/component-mappings';
import { REMOVED_COMPONENTS } from '../utility/removed-components';
import { Node } from 'ts-morph';
import { addNamedImport } from '../../../../../utility/ts-morph/add-named-import';
import { parseSourceFile } from '../../../../../utility/ts-morph/parse-source-file';

interface TransformModuleOptions {
	fixUnusedIdentifiers?: boolean;
}

function transformModule(code: string, options: TransformModuleOptions = {}) {
	const file = parseSourceFile(code);
	const fixUnusedIdentifiers = options.fixUnusedIdentifiers ?? true;
	file.forEachDescendant((node) => {
		if (Node.isImportDeclaration(node)) {
			const moduleSpecifier = node.getModuleSpecifier();
			if (moduleSpecifier.getLiteralText() === '@skeletonlabs/skeleton') {
				node.setModuleSpecifier('@skeletonlabs/skeleton-svelte');
			}
		}
		if (Node.isImportSpecifier(node)) {
			const name = node.getName();
			if (name in COMPONENT_MAPPINGS) {
				node.remove();
				addNamedImport(file, '@skeletonlabs/skeleton-svelte', COMPONENT_MAPPINGS[name]);
			}
			if (REMOVED_COMPONENTS.includes(name)) {
				const parent = node.getParent().getParent().getParent();
				if (
					Node.isImportDeclaration(parent) &&
					parent.getNamedImports().length === 1 &&
					!parent.getDefaultImport() &&
					!parent.getNamespaceImport()
				) {
					parent.remove();
				} else {
					node.remove();
				}
			}
		}
		if (!node.wasForgotten() && Node.isIdentifier(node)) {
			const name = node.getText();
			if (name in COMPONENT_MAPPINGS) {
				node.replaceWithText(COMPONENT_MAPPINGS[name]);
			}
		}
		if (!node.wasForgotten() && Node.isStringLiteral(node) && !Node.isImportDeclaration(node.getParent())) {
			node.setLiteralValue(transformClasses(node.getLiteralValue()).code);
		}
	});
	if (fixUnusedIdentifiers) {
		file.fixUnusedIdentifiers();
	}
	return {
		code: file.getFullText()
	};
}

export { transformModule };
