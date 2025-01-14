<script lang="ts">
	import * as radio from '@zag-js/radio-group';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { SegmentProps } from './types.js';
	import { setSegmentContext } from './context.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		value = $bindable(''),
		orientation = 'horizontal',
		// Root
		base = 'inline-flex items-stretch overflow-hidden',
		background = 'preset-outlined-surface-200-800',
		border = 'p-2',
		gap = 'gap-2',
		padding = '',
		rounded = 'rounded-container',
		width = '',
		classes = '',
		// States
		orientVertical = 'flex-col',
		orientHorizontal = 'flex-row',
		stateDisabled = 'disabled',
		stateReadOnly = 'pointer-events-none',
		// Indicator
		indicatorBase = 'top-[var(--top)] left-[var(--left)] w-[var(--width)] h-[var(--height)]',
		indicatorBg = 'preset-filled',
		indicatorText = 'text-surface-contrast-950 dark:text-surface-contrast-50',
		indicatorRounded = 'rounded',
		indicatorClasses = '',

		// Label
		labelledby = '',

		// Snippets
		children,
		// Zag
		...zagProps
	}: SegmentProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		radio.machine({
			id: useId(),
			onValueChange(details) {
				zagProps.onValueChange?.(details);
				value = details.value;
			},
			orientation
		}),
		{
			context: {
				...zagProps,
				get value() {
					return value;
				}
			}
		}
	);
	const api = $derived(radio.connect(snapshot, send, normalizeProps));

	// Set Context
	setSegmentContext({
		get api() {
			return api;
		},
		get indicatorText() {
			return indicatorText;
		}
	});

	// Reactive
	const rxOrientation = $derived(snapshot.context.orientation === 'vertical' ? orientVertical : orientHorizontal);
	const rxDisabled = $derived(snapshot.context.disabled ? stateDisabled : '');
	const rxReadOnly = $derived(snapshot.context.readOnly ? stateReadOnly : '');
</script>

<!-- @component Capture input for a limited set of options. -->

<div
	{...api.getRootProps()}
	class="{base} {rxOrientation} {background} {border} {padding} {gap} {rounded} {width} {rxDisabled} {rxReadOnly} {classes}"
	aria-labelledby={labelledby}
	data-testid="segment"
>
	<!-- Indicator -->
	<div
		{...api.getIndicatorProps()}
		class="{indicatorBase} {indicatorBg} {indicatorRounded} {indicatorClasses}"
		data-testid="segment-indicator"
	></div>
	<!-- Items -->
	{@render children?.()}
</div>
