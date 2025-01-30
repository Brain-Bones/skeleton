<script lang="ts">
	import { fade } from 'svelte/transition';

	import * as popover from '@zag-js/popover';
	import { portal, useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import type { PopoverProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		open = $bindable(false),
		arrow = false,
		disabled = false,
		// Base
		base = '',
		classes = '',
		// Trigger
		triggerBase = '',
		triggerBackground = '',
		triggerClasses = '',
		// Positioner
		positionerBase = '',
		positionerZIndex = '',
		positionerClasses = '',
		// Content
		contentBase = '',
		contentBackground = '',
		contentClasses = '',
		// Arrow
		arrowBase = '',
		arrowBackground = '!bg-surface-200 dark:!bg-surface-800',
		arrowClasses = '',
		// Snippets
		trigger,
		content,
		// Events
		onclick,
		// Zag ---
		...zagProps
	}: PopoverProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		popover.machine({
			id: useId(),
			open,
			onOpenChange(details) {
				zagProps.onOpenChange?.(details);
				open = details.open;
			}
		}),
		{
			context: {
				...zagProps,
				get open() {
					return $state.snapshot(open);
				}
			}
		}
	);
	const api = $derived(popover.connect(snapshot, send, normalizeProps));
	const triggerProps = $derived(mergeProps(api.getTriggerProps(), { onclick }));
</script>

<span class="{base} {classes}" data-testid="popover">
	<!-- Snippet: Trigger -->
	<button {...triggerProps} class="{triggerBase} {triggerBackground} {triggerClasses}" {disabled}>
		{@render trigger?.()}
	</button>
	<!-- Portal -->
	<div
		use:portal={{ disabled: !api.portalled }}
		{...api.getPositionerProps()}
		class="{positionerBase} {positionerZIndex} {positionerClasses}"
	>
		<!-- Popover -->
		{#if api.open}
			<div {...api.getContentProps()} transition:fade={{ duration: 100 }}>
				<!-- Arrow -->
				{#if arrow}
					<div {...api.getArrowProps()}>
						<div {...api.getArrowTipProps()} class="{arrowBase} {arrowBackground} {arrowClasses}"></div>
					</div>
				{/if}
				<!-- Snippet: Content -->
				<div class="{contentBase} {contentBackground} {contentClasses}">{@render content?.()}</div>
			</div>
		{/if}
	</div>
</span>

<style>
	:global([data-part='arrow']) {
		--arrow-size: 10px;
	}
</style>
