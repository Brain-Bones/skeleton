<script lang="ts">
	import * as rating from '@zag-js/rating-group';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import { starEmpty, starHalf, starFull } from '$lib/internal/snippets.js';
	import type { RatingProps } from './types.js';

	// Props
	let {
		value = $bindable(),
		// Root
		base = '',
		classes = '',
		// Control
		controlBase = 'flex',
		controlGap = 'gap-2',
		controlClasses,
		// Label
		labelBase = 'label-text',
		labelClasses = '',
		// Item
		itemBase = '',
		itemClasses = '',
		// State
		stateInteractive = 'cursor-pointer',
		stateReadOnly = '',
		stateDisabled = 'cursor-not-allowed opacity-50',
		// Icons
		iconEmpty = starEmpty,
		iconHalf = starHalf,
		iconFull = starFull,
		// Children
		label,
		// Zag
		...zagProps
	}: RatingProps = $props();

	// Zag
	const [state, send] = useMachine(
		rating.machine({
			id: useId(),
			onValueChange: (details) => {
				zagProps.onValueChange?.(details);
				value = details.value;
			}
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
	const api = $derived(rating.connect(state, send, normalizeProps));

	// Reactive
	const rxInteractive = $derived(state.context.isInteractive ? stateInteractive : '');
	const rxReadOnly = $derived(state.context.readOnly ? stateReadOnly : '');
	const rxDisabled = $derived(state.context.disabled ? stateDisabled : '');
</script>

<!-- @component A visual representation of a numeric range. -->

<!-- Root -->
<div class="{base} {classes}" {...api.getRootProps()} data-testid="rating">
	<!-- Label -->
	{#if !!label}
		<label class="{labelBase} {labelClasses}" {...api.getLabelProps()} data-testid="rating-label">
			{@render label()}
		</label>
	{/if}
	<!-- Control -->
	<div
		class="{controlBase} {controlGap} {rxInteractive} {rxReadOnly} {rxDisabled} {controlClasses}"
		{...api.getControlProps()}
		data-testid="rating-control"
	>
		{#each api.items as index}
			{@const itemState = api.getItemState({ index })}
			<!-- Item -->
			<span class="{itemBase} {itemClasses}" {...api.getItemProps({ index })} data-testid="rating-item">
				{#if !itemState.highlighted}
					{@render iconEmpty()}
				{:else if itemState.half}
					{@render iconHalf()}
				{:else}
					{@render iconFull()}
				{/if}
			</span>
		{/each}
	</div>
	<!-- Hidden Input -->
	<input {...api.getHiddenInputProps()} data-testid="rating-input" />
</div>
