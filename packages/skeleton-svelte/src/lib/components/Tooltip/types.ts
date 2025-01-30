import type { Snippet } from 'svelte';
import * as tooltip from '@zag-js/tooltip';

export interface TooltipProps extends Omit<tooltip.Context, 'id' | 'open'> {
	/** Set the open state of the tooltip. */
	open?: boolean;
	/** Enable display of the popover arrow. */
	arrow?: boolean;

	// Base ---
	/** Set base classes for the root element. */
	base?: string;
	/** Provide arbitrary classes for the root element. */
	classes?: string;

	// Trigger ---
	/** Set base styles for the trigger. */
	triggerBase?: string;
	/** Set background styles for the trigger. */
	triggerBackground?: string;
	/** Provide arbitrary styles for the trigger. */
	triggerClasses?: string;

	// Positioner ---
	/** Set base classes for the positioner. */
	positionerBase?: string;
	/** Set z-index classes for the positioner. */
	positionerZIndex?: string;
	/** Provide arbitrary classes for the positioner. */
	positionerClasses?: string;

	// Content ---
	/** Set base styles for the content. */
	contentBase?: string;
	/** Set background styles for the content. */
	contentBackground?: string;
	/** Provide arbitrary styles for the content. */
	contentClasses?: string;

	// Arrow ---
	/** Set base classes for the arrow. */
	arrowBase?: string;
	/** Set background classes for the arrow. */
	arrowBackground?: string;
	/** Provide arbitrary classes for the arrow. */
	arrowClasses?: string;

	// Snippets ---
	/** Provide the template contents inside the trigger button. */
	trigger?: Snippet;
	/** Provide the template contents of the tooltip itself. */
	content?: Snippet;

	// Events ---
	/** Handle the tooltip button hover event. */
	onmouseover?: () => void;
	/** Handle the tooltip button click event. */
	onclick?: () => void;
}
