<script lang="ts">
	import * as tagsInput from '@zag-js/tags-input';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import { useId } from '$lib/internal/use-id.js';
	import type { TagsInputProps } from './types.js';

	// Props
	let {
		value = $bindable(),
		placeholder = '',
		// Root
		base = 'grid input',
		gap = 'gap-2',
		padding = 'p-3',
		classes = '',
		// Input: Add
		inputBase = 'input-ghost',
		inputClasses = '',
		// Tag List
		tagListBase = 'flex gap-2',
		tagListClasses = '',
		// Tag
		tagBase = 'chip',
		tagBackground = 'preset-filled',
		tagClasses = '',
		// Input: Edit
		inputEditBase = 'chip-input -translate-y-0.25',
		tagEditBackground = 'preset-outlined-surface-200-800',
		inputEditClasses,
		// Delete Button
		buttonDeleteBase = '',
		buttonDeleteClasses = '',
		// State
		stateDisabled = 'disabled',
		// Snippets
		buttonDelete,
		// Zag
		...zagProps
	}: TagsInputProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		tagsInput.machine({
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
					return $state.snapshot(value);
				}
			}
		}
	);
	const api = $derived(tagsInput.connect(snapshot, send, normalizeProps));

	// Reactive
	const rxDisabled = $derived(snapshot.context.disabled ? stateDisabled : '');
</script>

<!-- @component Capture a set of values from users via input and suggestions. -->

<div {...api.getRootProps()} class="{base} {padding} {gap} {rxDisabled} {classes}" data-testid="tags">
	<!-- Input -->
	<input {...api.getInputProps()} {placeholder} class="{inputBase} {inputClasses}" data-testid="tags-input-add" />
	<!-- Tag List -->
	{#if api.value.length > 0}
		<div class="{tagListBase} {tagListClasses}" data-testid="tags-list">
			{#each api.value as value, index (value)}
				{@const itemState = api.getItemState({ index, value })}
				<!-- Tag -->
				<div {...api.getItemProps({ value, index })} data-testid="tags-tag">
					<!-- Display -->
					<div
						{...api.getItemPreviewProps({ index, value })}
						class="{tagBase} {tagBackground} {tagClasses}"
						style:display={itemState.editing ? 'none' : ''}
						data-testid="tag-display"
					>
						<span>{value}</span>
						<!-- Delete Button -->
						<button
							{...api.getItemDeleteTriggerProps({ index, value })}
							class="{buttonDeleteBase} {buttonDeleteClasses}"
							data-testid="tag-delete"
						>
							{#if buttonDelete}
								{@render buttonDelete()}
							{:else}
								<strong>&times;</strong>
							{/if}
						</button>
					</div>
					<!-- Editing -->
					<input
						{...api.getItemInputProps({ index, value })}
						class="{inputEditBase} {tagEditBackground} {inputEditClasses}"
						style:display={itemState.editing ? '' : 'none'}
						data-testid="tags-input-edit"
					/>
				</div>
			{/each}
		</div>
	{/if}
</div>
