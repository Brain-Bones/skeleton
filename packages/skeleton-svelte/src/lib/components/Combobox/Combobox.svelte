<script lang="ts">
	import { fade } from 'svelte/transition';

	import * as combobox from '@zag-js/combobox';
	import { useMachine, normalizeProps, mergeProps } from '@zag-js/svelte';
	import type { ComboboxProps } from './types.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		data = $bindable([]),
		value = $bindable([]),
		label = '',
		disabled = false,
		// Base
		base = '',
		width = '',
		classes = '',
		// Label
		labelBase = 'label',
		labelText = 'label-text',
		labelClasses = '',
		// Input
		inputGroupBase = 'input-group grid-cols-[1fr_auto]',
		inputGroupInput = '',
		inputGroupButton = 'input-group-cell',
		inputGroupArrow = '',
		inputGroupClasses = '',
		// Positioner
		positionerBase = '',
		positionerZIndex = '',
		positionerClasses = '',
		// Content
		contentBase = 'card p-2',
		contentBackground = 'preset-outlined-surface-200-800 bg-surface-50-950',
		contentSpaceY = 'space-y-1',
		contentClasses = '',
		// Option
		optionBase = 'btn justify-start w-full',
		optionHover = 'hover:preset-tonal',
		optionActive = 'preset-filled-primary-500',
		optionClasses = '',
		// Snippets
		arrow,
		// Events
		onclick,
		// Zag ---
		...zagProps
	}: ComboboxProps = $props();

	// Zag
	let options = $state.raw(data);
	const collection = combobox.collection({
		items: data,
		// Map data structure
		itemToValue: (item) => item.value,
		itemToString: (item) => item.label
	});
	const [snapshot, send] = useMachine(
		combobox.machine({
			id: useId(),
			collection,
			value: $state.snapshot(value),
			loopFocus: true,
			onOpenChange(details) {
				zagProps.onOpenChange?.(details);
				options = data;
			},
			onInputValueChange(details) {
				zagProps.onInputValueChange?.(details);
				const filtered = data.filter((item) => item.label.toLowerCase().includes(details.inputValue.toLowerCase()));
				const newOptions = filtered.length > 0 ? filtered : data;
				collection.setItems(newOptions);
				options = newOptions;
			},
			onValueChange(event) {
				zagProps.onValueChange?.(event);
				value = event.value;
			}
		}),
		{
			context: {
				...zagProps,
				get data() {
					return $state.snapshot(data);
				},
				get value() {
					return $state.snapshot(value);
				}
			}
		}
	);
	const api = $derived(combobox.connect(snapshot, send, normalizeProps));
	const triggerProps = $derived(mergeProps(api.getTriggerProps(), { onclick }));
</script>

<span {...api.getRootProps()} class="{base} {width} {classes}" data-testid="combobox">
	<!-- Label -->
	<label {...api.getLabelProps()} class="{labelBase} {labelClasses}">
		{#if label}<span class={labelText}>{label}</span>{/if}
		<!-- Input Group -->
		<div {...api.getControlProps()} class="{inputGroupBase} {inputGroupClasses}">
			<!-- Input -->
			<input {...api.getInputProps()} class={inputGroupInput} {disabled} />
			<!-- Arrow -->
			<button {...triggerProps} class={inputGroupButton} {disabled}>
				{#if arrow}
					{@render arrow()}
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						style="opacity: 0.5"
						class={inputGroupArrow}
					>
						<path d="m6 9 6 6 6-6" />
					</svg>
				{/if}
			</button>
		</div>
	</label>
	<!-- Menu -->
	{#if api.open}
		<div {...api.getPositionerProps()} transition:fade={{ duration: 100 }} class="{positionerBase} {positionerZIndex} {positionerClasses}">
			{#if options.length > 0}
				<!-- Content (list) -->
				<nav {...api.getContentProps()} class="{contentBase} {contentBackground} {contentSpaceY} {contentClasses}">
					{#each options as item}
						{@const isChecked = api.getItemProps({ item })['data-state'] === 'checked'}
						{@const displayClass = isChecked ? optionActive : optionHover}
						<!-- Option -->
						<!-- ZagJs should have set button type to "button" here. See https://github.com/skeletonlabs/skeleton/pull/2998#discussion_r1855511385 -->
						<button {...api.getItemProps({ item })} class="{optionBase} {displayClass} {optionClasses}" type="button">
							{item.label}
						</button>
					{/each}
				</nav>
			{/if}
		</div>
	{/if}
</span>

<style lang="postcss">
	[data-part='item'][data-highlighted]:not([data-state='checked']) {
		@apply bg-surface-500/10;
	}
</style>
