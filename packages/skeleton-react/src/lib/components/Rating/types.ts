import React, { ReactNode } from 'react';

// Components ---

export interface RatingProps {
	/** Sets the rating value. */
	value?: number;
	/** Sets the maximum rating value. */
	max?: number;
	/** Sets interactive mode. */
	interactive?: boolean;
	/** Sets the rating fractional granularity. */
	step?: number;

	// Root ---
	/** Sets base styles. */
	base?: string;
	/** Sets width styles. */
	width?: string;
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
	/** Set the clip styles for the empty icon. */
	emptyClip?: string;
	/** Set interactive state styles for the empty icon. */
	emptyInteractive?: string;
	/** Set non-interactive state styles for the empty icon. */
	emptyStatic?: string;
	/** Provide arbitrary CSS classes for the empty icon. */
	emptyClasses?: string;

	// Icon Full
	/** Set base styles for the full icon. */
	fullBase?: string;
	/** Set the clip styles for the full icon. */
	fullClip?: string;
	/** Set interactive state styles for the full icon. */
	fullInteractive?: string;
	/** Set non-interactive state styles for the full icon. */
	fullStatic?: string;
	/** Provide arbitrary CSS classes for the full icon. */
	fullClasses?: string;

	// Events ---
	/** Triggers on rating mouse down. */
	onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>, value: number) => void;
	/** Triggers on rating key down. */
	onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	/** Triggers on rating value change. */
	onValueChange?: (value: number) => void;

	// Children ---
	/** The empty icon children. */
	iconEmpty?: ReactNode;
	/** The full icon children. */
	iconFull?: ReactNode;
}
