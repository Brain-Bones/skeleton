import type { Snippet } from 'svelte';

// Context ---

export interface SegmentContext {
	value: string;
	name: string;
	onSelectionHandler: (value: string) => void;
}

// Components ---

export interface SegmentControl {
	/** Set the group value, which determines selection state. */
	value?: string;
	/** Provide the shared input name. */
	name: string;

	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Set background classes. */
	background?: string;
	/** Set border classes. */
	border?: string;
	/** Set flex direction classes. */
	flexDirection?: string;
	/** Set gap classes. */
	gap?: string;
	/** Set padding classes. */
	padding?: string;
	/** Set rounded classes. */
	rounded?: string;
	/** Set width classes. */
	width?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Events ---
	/** Triggers when the value state is changed. */
	onchange?: (value: string) => void;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}

export interface SegmentItemProps {
	/** Provide a unique ID. */
	id: string;
	/** Provide the unique segment value. */
	value: string;
	/** Provide a hover title attribute. */
	title?: string;
	/** Set the disabled state. */
	disabled?: boolean;

	// Root ---
	/** Sets base classes. */
	base?: string;
	/** Sets active state classes. */
	active?: string;
	/** Sets hover state classes. */
	hover?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Input ---
	/* Set base classes for the hidden radio input */
	radioBase?: string;

	// Label ---
	/** Sets base classes for the label element. */
	labelBase?: string;
	/** Provide arbitrary CSS classes for the label element. */
	labelClasses?: string;

	// Events ---
	/** Triggers on items click event. */
	onclick?: (value: string) => void;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
