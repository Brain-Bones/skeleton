import * as rating from '@zag-js/rating-group';
import type { Snippet } from 'svelte';

export interface RatingProps extends Omit<rating.Context, 'id' | 'onValueChange'> {
	// Root ---
	/** Set root base classes */
	base?: string;
	/** Set root gap classes */
	gap?: string;
	/** Set root arbitrary classes */
	classes?: string;

	// Control ---
	/** Set control base classes */
	controlBase?: string;
	/** Set control gap classes */
	controlGap?: string;
	/** Set control arbitrary classes */
	controlClasses?: string;

	// Label ---
	/** Set label base classes */
	labelBase?: string;
	/** Set label arbitrary classes */
	labelClasses?: string;

	// Item ---
	/** Set item base classes */
	itemBase?: string;
	/** Set item arbitrary classes */
	itemClasses?: string;

	// State ---
	/** Set root readonly classes */
	stateReadOnly?: string;
	/** Set root disabled classes */
	stateDisabled?: string;

	// Snippets ---
	/** Set the empty icon snippet */
	iconEmpty?: Snippet;
	/** Set the half icon snippet */
	iconHalf?: Snippet;
	/** Set the full icon snippet */
	iconFull?: Snippet;
	/** Set the label snippet */
	label?: Snippet;

	// Events ---
	/** Set the onValueChange callback */
	onValueChange?: (value: number) => void;
}
