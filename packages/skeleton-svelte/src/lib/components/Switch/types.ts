import type { Snippet } from 'svelte';

export interface SwitchProps {
	/** Set a unique ID for the switch input. */
	id: string;
	/** Set a unique name for the switch input. */
	name: string;
	/** Set the checked state. */
	checked?: boolean;
	/** Set the disabled state. */
	disabled?: boolean;
	/** Set the compact display mode. */
	compact?: boolean;

	// Root ---
	/** Set base classes for the root element. */
	base?: string;
	/** Set inactive state classes for the root element. */
	stateInactive?: string;
	/** Set active state classes for the root element. */
	stateActive?: string;
	/** Set disabled state classes for the root element. */
	stateDisabled?: string;
	/** Set width classes for the root element. */
	width?: string;
	/** Set height classes for the root element. */
	height?: string;
	/** Set padding classes for the root element. */
	padding?: string;
	/** Set rounded classes for the root element. */
	rounded?: string;
	/** Set hover classes for the root element. */
	hover?: string;
	/** Provide arbitrary classes to the root element. */
	classes?: string;

	// Thumb ---
	/** Set base classes for the thumb element. */
	thumbBase?: string;
	/** Set inactive classes for the thumb element. */
	thumbStateInactive?: string;
	/** Set active classes for the thumb element. */
	thumbStateActive?: string;
	/** Set rounded classes for the thumb element. */
	thumbRounded?: string;
	/** Set animation X-axis translate classes for the thumb element. */
	thumbTranslateX?: string;
	/** Set animation transition classes for the thumb element. */
	thumbTransition?: string;
	/** Set animation easing classes for the thumb element. */
	thumbEase?: string;
	/** Set animation duration classes for the thumb element. */
	thumbDuration?: string;
	/** Provide arbitrary classes to the thumb element. */
	thumbClasses?: string;

	// Events ---
	/** Triggers when clicked. */
	onclick?: (event: MouseEvent | TouchEvent) => void;

	// Snippets ---
	/** The inactive state children. */
	inactiveChild?: Snippet;
	/** The active state children. */
	activeChild?: Snippet;
}
