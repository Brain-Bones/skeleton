import type { Snippet } from 'svelte';
import * as combobox from '@zag-js/combobox';

export interface ComboboxProps extends Omit<combobox.Context, 'id' | 'collection' | 'value' | 'label' | 'multiple'> {
	/** Provide the list of label and value data */
	data?: { label: string; value: string }[];
	/** Bind the selected value. */
	value?: string[] | undefined;
	/** Set the label to display. */
	label?: string;
	/** Disable the trigger element of the combobox */
	disabled?: boolean;

	// Base ---
	/** Set base classes for the root element. */
	base?: string;
	/** Set width classes for the root element. */
	width?: string;
	/** Provide arbitrary classes for the root element. */
	classes?: string;

	// Label ---
	/** Set base classes for the label. */
	labelBase?: string;
	/** Set text and font classes for the label. */
	labelText?: string;
	/** Provide arbitrary classes for the label. */
	labelClasses?: string;

	// Input Group ---
	/** Set base classes for the input group. */
	inputGroupBase?: string;
	/** Set input classes for the input group. */
	inputGroupInput?: string;
	/** Set button classes for the input group. */
	inputGroupButton?: string;
	/** Set arrow classes for the input group. */
	inputGroupArrow?: string;
	/** Provide arbitrary classes for the input group. */
	inputGroupClasses?: string;

	// Positioner ---
	/** Set base classes for the positioner. */
	positionerBase?: string;
	/** Set z-index classes for the positioner. */
	positionerZIndex?: string;
	/** Provide arbitrary classes for the positioner. */
	positionerClasses?: string;

	// Content ---
	/** Set base classes for the content. */
	contentBase?: string;
	/** Set background classes for the content. */
	contentBackground?: string;
	/** Set space-y classes for the content. */
	contentSpaceY?: string;
	/** Provide arbitrary classes for the content. */
	contentClasses?: string;

	// Option ---
	/** Set base classes for the option. */
	optionBase?: string;
	/** Set focus classes for the option. */
	optionFocus?: string;
	/** Set hover classes for the option. */
	optionHover?: string;
	/** Set active classes for the option. */
	optionActive?: string;
	/** Provide arbitrary classes for the option. */
	optionClasses?: string;

	// Snippets ---
	/** Provide a custom arrow icon. */
	arrow?: Snippet;

	// Events ---
	/** Handle the combobox dropdown button click event. */
	onclick?: (event: Event) => void;
}
