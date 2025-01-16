import type { Snippet } from 'svelte';

export interface PlacementStyles {
	top?: string;
	bottom?: string;
	left?: string;
	right?: string;
	'align-items'?: string;
}

// Store

// https://zagjs.com/components/react/toast#creating-a-toast
export interface Toast {
	/** The unique toast ID. */
	id?: string;
	/** The unique toast title text. */
	title?: string;
	/** The unique toast description text. */
	description?: string;
	/**
	 * Define the toast type.
	 * @default info
	 */
	type?: 'info' | 'error' | 'success';
	/** The duration of the toast. Default varies by type. */
	duration?: number;
}

// Context ---

// https://zagjs.com/components/react/toast#programmatic-control
/** Provides access to the Toast Context API. */
export interface ToastContext {
	/** Used to create display a new Toast instance. */
	create: (toast: Toast) => void;
}

// Component ---

export interface ToastProviderProps {
	/**
	 * Offset from the viewport edge.
	 * @default bottom-end
	 */
	placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
	/**
	 * Offset from the viewport edge.
	 * @default 16px
	 */
	offset?: string;
	/**
	 * The dismiss button label text.
	 * @default &times;
	 */
	dismissLabel?: string;

	// Group ---
	/** Provide base classes for the root element. */
	groupBase?: string;
	/** Provide z-index classes for the root element. */
	groupZIndex?: string;
	/** Provide gap classes for the root element. */
	groupGap?: string;
	/** Provide arbitrary classes for the root element. */
	groupClasses?: string;

	// Toast ---
	/** Provide base classes for the toast cards. */
	toastBase?: string;
	/** Provide padding classes for the toast cards. */
	toastPadding?: string;
	/** Provide gap classes for the toast cards. */
	toastGap?: string;
	/** Provide shadow classes for the toast cards. */
	toastShadow?: string;
	/** Provide arbitrary classes for the toast cards. */
	toastClasses?: string;

	// Message ---
	/** Provide base classes for the message region. */
	messageBase?: string;
	/** Provide classes for the message title text. */
	messageTitle?: string;
	/** Provide classes for the message description text. */
	messageDescription?: string;
	/** Provide arbitrary classes for the message region. */
	messageClasses?: string;

	// Dismiss Button ---
	/** Provide base classes for the dismiss button. */
	btnDismissBase?: string;
	/** Provide preset classes for the dismiss button. */
	btnDimissPreset?: string;
	/** Provide hover classes for the dismiss button. */
	btnDismissHover?: string;
	/** Provide arbitrary classes for the dismiss button. */
	btnDismissClasses?: string;

	// State ---
	/** Provide base classes for info toasts. */
	stateInfo?: string;
	/** Provide base classes for error toasts. */
	stateError?: string;
	/** Provide base classes for success toasts. */
	stateSuccess?: string;

	// Snippets ---
	/** The default child slot for the toast provider. */
	children?: Snippet;
}
