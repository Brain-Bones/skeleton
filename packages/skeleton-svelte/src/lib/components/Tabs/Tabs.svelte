<script lang="ts">
	import * as tabs from '@zag-js/tabs';
	import { useMachine, normalizeProps } from '@zag-js/svelte';
	import type { TabsProps } from './types.js';
	import { setTabContext } from './context.js';
	import { useId } from '$lib/internal/use-id.js';

	let {
		value = $bindable(''),
		fluid = false,
		// Root
		base = 'w-full',
		classes = '',
		// List
		listBase = 'flex',
		listJustify = 'justify-start',
		listBorder = 'border-b-[1px] border-surface-200-800',
		listMargin = 'mb-4',
		listGap = 'gap-2',
		listClasses = '',
		// Content
		contentBase = '',
		contentClasses = '',
		// Snippets
		list,
		content,
		// Zag
		...zagProps
	}: TabsProps = $props();

	// Zag
	const [snapshot, send] = useMachine(
		tabs.machine({
			id: useId(),
			onValueChange(details) {
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
	const api = $derived(tabs.connect(snapshot, send, normalizeProps));

	// Set Context
	setTabContext({
		get api() {
			return api;
		},
		get fluid() {
			return fluid;
		}
	});
</script>

<!-- @component Use tabs to quickly switch between different views and pages. -->

<div {...api.getRootProps()} class="{base} {classes}" data-testid="tabs">
	<!-- List -->
	<div {...api.getListProps()} class="{listBase} {listJustify} {listBorder} {listMargin} {listGap} {listClasses}" data-testid="tabs-list">
		{@render list?.()}
	</div>
	<!-- Content -->
	<div class="{contentBase} {contentClasses}" data-testid="tabs-content">
		{@render content?.()}
	</div>
</div>
