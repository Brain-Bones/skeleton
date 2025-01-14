import type { Snippet } from 'svelte';
import * as tabs from '@zag-js/tabs';

// Context ---

export interface TabsContextState {
	fluid: boolean;
	api: ReturnType<typeof tabs.connect>;
}

// Components ---

export interface TabsProps extends Omit<tabs.Context, 'id' | 'orientation'> {
	/** Set the active value. */
	value?: string;
	/** Set tabs to stretch to fill the available width. */
	fluid?: boolean;

	// Root ---
	/** Set base classes for the root element. */
	base?: string;
	/** Provide arbitrary classes for the root element. */
	classes?: string;

	// List ---
	/** Set base classes for the list element. */
	listBase?: string;
	/** Set justify classes for the list element. */
	listJustify?: string;
	/** Set border classes for the list element. */
	listBorder?: string;
	/** Set margin classes for the list element. */
	listMargin?: string;
	/** Set gap classes for the list element. */
	listGap?: string;
	/** Provide arbitrary classes for the list element. */
	listClasses?: string;

	// Content ---
	/** Set base classes for the panel group element. */
	contentBase?: string;
	/** Provide arbitrary classes for the panel group element. */
	contentClasses?: string;

	// Snippets ---
	/** Slot containing the list of tab controls. */
	list?: Snippet;
	/** Slot containing the list of panels. */
	content?: Snippet;
}

export interface TabsControlProps extends tabs.TriggerProps {
	// Root ---
	/** Set base classes for the control element. */
	base?: string;
	/** Set padding classes for the control element. */
	padding?: string;
	/** Set x-axis translate classes for the control element. */
	translateX?: string;
	/** Provide arbitrary classes for the control element. */
	classes?: string;

	// Label ---
	/** Set base classes for the label element. */
	labelBase?: string;
	/** Provide arbitrary classes for the label element. */
	labelClasses?: string;

	// State ---
	/** Set inactive classes for the control element. */
	stateInactive?: string;
	/** Set active classes for the control element. */
	stateActive?: string;
	/** Set inactive classes for the label element. */
	stateLabelInactive?: string;
	/** Set active classes for the label element. */
	stateLabelActive?: string;

	// Snippets ---
	/** The lead slot. */
	lead?: Snippet;
	/** The default child slot. */
	children?: Snippet;
}

export interface TabsPanelProps extends tabs.ContentProps {
	// Root ---
	/** Set base classes for the panel element. */
	base?: string;
	/** Provide arbitrary classes for the panel element. */
	classes?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
