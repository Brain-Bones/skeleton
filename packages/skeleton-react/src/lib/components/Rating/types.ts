import React from "react";

// Components ---

export interface RatingProps extends React.PropsWithChildren {
    /** Sets the rating value. */
	value?: number;
	/** Sets the maximum rating value. */
	max?: number;
	/** Sets interactive mode. */
	interactive?: boolean;
	/** Sets the rating fractions. */
	fraction?: number;

    // Root ---
	/** Sets base styles. */
	base?: string;
	/** Sets width styles. */
	width?: string;
	/** Sets text color styles. */
	text?: string;
	/** sets fill color styles. */
	fill?: string;
	/** Sets justification styles. */
	justify?: string;
	/** Sets horizontal spacing styles. */
	spaceX?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Button ---
	/** Sets the button base styles. */
	buttonBase?: string;
	/** Sets the button position styles. */
	buttonPosition?: string;
	/** Sets the button aspect ratio styles. */
	buttonAspect?: string;
	/** Provide arbitrary CSS classes to the rating button. */
	buttonClasses?: string;

	// Icon Empty
	/** Set base styles for the empty icon. */
	emptyBase?: string;
	/** Set interactive state styles for the empty icon. */
	emptyInteractive?: string;
	/** Set non-interactive state styles for the empty icon. */
	emptyStatic?: string;
	/** Provide arbitrary for the empty icon. */
	emptyClasses?: string;

	// Icon Full
	/** Set base styles for the full icon. */
	fullBase?: string;
	/** Set interactive state styles for the full icon. */
	fullInteractive?: string;
	/** Set non-interactive state styles for the full icon. */
	fullStatic?: string;
	/** Provide arbitrary for the full icon. */
	fullClasses?: string;

	// Events ---
	/** Triggers on rating mouse down. */
	onmousedown?: (event: MouseEvent, value: number) => void;
	/** Triggers on rating key down. */
	onkeydown?: (event: KeyboardEvent) => void;
}