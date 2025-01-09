<script lang="ts">
	import { getNavigationContext } from './context.js';
	import type { NavTileProps } from './types.js';

	let {
		id,
		href,
		target,
		label,
		labelExpanded,
		title,
		selected = false,
		type = 'button',
		// Root
		base = 'flex items-center',
		width = 'w-full',
		aspect = 'aspect-square',
		background = '',
		hover = 'hover:preset-filled-surface-50-950',
		active = 'preset-filled-primary-500',
		padding = 'p-2',
		gap = 'gap-1',
		rounded = 'rounded-container',
		classes = 'flex-col justify-center',
		// Expanded
		expandedPadding = 'py-3 px-4',
		expandedGap = 'gap-4',
		expandedClasses = '',
		// Label (base)
		labelBase = 'type-scale-1',
		labelClasses = '',
		// Label (expanded)
		labelExpandedBase = '',
		labelExpandedClasses = '',
		// Events
		onclick,
		// Snippets
		children
	}: NavTileProps = $props();

	// Context
	const ctx = getNavigationContext();

	// Reactive
	const element = $derived(href ? 'a' : 'button');
	const role = $derived(href ? undefined : 'button');
	const rxSize = $derived(ctx.parent === 'bar' ? `h-full` : `${aspect}`);
	const classesCollapsed = $derived(`${rxSize} ${padding} ${gap} ${classes}`);
	const classesExtended = $derived(`${expandedPadding} ${expandedGap} ${expandedClasses}`);
	const rxMode = $derived(ctx.expanded ? classesExtended : classesCollapsed);
	const rxBackground = $derived(selected || ctx.value === id ? active : `${background} ${hover}`);

	function onClickHandler() {
		if (onclick && !id) throw new Error('No ID was provided');
		if (onclick && id) onclick(id);
		if (ctx.onSelectionHandler && id) ctx.onSelectionHandler(id);
	}
</script>

<!-- @component An individual Navigation component tile. -->

<svelte:element
	this={element}
	class="{base} {width} {rounded} {rxBackground} {rxMode}"
	{href}
	{target}
	type={element === 'button' ? type : undefined}
	{title}
	{role}
	onclick={onClickHandler}
	tabindex="0"
	data-testid="nav-tile"
>
	<!-- Icon -->
	{#if children}<div>{@render children()}</div>{/if}
	<!-- Label (base) -->
	{#if label && !ctx.expanded}
		<div class="{labelBase} {labelClasses}" data-testid="nav-tile-label">{label}</div>
	{/if}
	<!-- Label (expanded) -->
	{#if labelExpanded && ctx.expanded}
		<div class="{labelExpandedBase} {labelExpandedClasses}" data-testid="nav-tile-label-expanded">{labelExpanded}</div>
	{/if}
</svelte:element>
