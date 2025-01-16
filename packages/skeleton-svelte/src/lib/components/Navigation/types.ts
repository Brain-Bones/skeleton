import type { Snippet } from 'svelte';

// Context ---

export interface NavContext {
	parent: 'bar' | 'rail' | 'none';
	value: string;
	expanded: boolean;
	onSelectionHandler: (id: string) => void;
}

// Components ---

/* Props common between NavRail and NavBar */
export interface NavCommonProps {
	value?: string;

	// Root ---
	/** Set base styles. */
	base?: string;
	/** Set background classes. */
	background?: string;
	/** Set padding classes. */
	padding?: string;
	/** Set width classes. */
	width?: string;
	/** Set width classes for expanded mode. */
	widthExpanded?: string;
	/** Set width classes. */
	height?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Tiles ---
	/** Set base classes. */
	tilesBase?: string;
	/** Set flex direction classes. */
	tilesFlexDirection?: string;
	/** Set flex justify classes. */
	tilesJustify?: string;
	/** Set flex align classes. */
	tilesItems?: string;
	/** Set gap classes. */
	tilesGap?: string;
	/** Provide arbitrary CSS classes. */
	tilesClasses?: string;

	// Events ---
	/** Triggers when selection occurs. */
	onchange?: (id: string) => void;
}

export interface NavBarProps extends NavCommonProps {
	// Snippets ---
	/** The default children snippet. */
	children?: Snippet;
}

export interface NavRailProps extends NavCommonProps {
	/** Enabled expanded mode. */
	expanded?: boolean;

	// Header ---
	/** Set base classes. */
	headerBase?: string;
	/** Set flex direction classes. */
	headerFlexDirection?: string;
	/** Set flex justify classes. */
	headerJustify?: string;
	/** Set flex align classes. */
	headerItems?: string;
	/** Set gap classes. */
	headerGap?: string;
	/** Provide arbitrary CSS classes. */
	headerClasses?: string;

	// Footer ---
	/** Set base classes. */
	footerBase?: string;
	/** Set flex direction classes. */
	footerFlexDirection?: string;
	/** Set flex justify classes. */
	footerJustify?: string;
	/** Set flex align classes. */
	footerItems?: string;
	/** Set gap classes. */
	footerGap?: string;
	/** Provide arbitrary CSS classes. */
	footerClasses?: string;

	// Snippets ---
	/** The header snippet. */
	header?: Snippet;
	/** The tiles snippet. */
	tiles?: Snippet;
	/** The footer snippet. */
	footer?: Snippet;
}

export interface NavTileProps {
	/** Provide a unique ID. */
	id?: string;
	/** Provide an href link; turns Tiles into an anchor */
	href?: string;
	/** Set the href target attribute. */
	target?: string;
	/** Provide the label text. */
	label?: string;
	/** Provide a longer label in expanded mode. */
	labelExpanded?: string;
	/** Provile a title attribute. */
	title?: string;
	/** Enable the active selected state. */
	selected?: boolean;
	/** Set button type. */
	type?: 'button' | 'submit' | 'reset';

	// Root ---
	/** Set base styles. */
	base?: string;
	/** Set width classes. */
	width?: string;
	/** Set aspect ratio classes. */
	aspect?: string;
	/** Set background classes. */
	background?: string;
	/** Set hover classes. */
	hover?: string;
	/** Set active classes. */
	active?: string;
	/** Set padding classes. */
	padding?: string;
	/** Set gap classes. */
	gap?: string;
	/** Set rounded classes. */
	rounded?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Root (expanded) ---
	/** Set padding classes for expanded mode. */
	expandedPadding?: string;
	/** Set gap classes for expanded mode. */
	expandedGap?: string;
	/** Provide arbitrary CSS classes for expanded mode. */
	expandedClasses?: string;

	// Label (base) ---
	/** Set base classes. */
	labelBase?: string;
	/** Provide arbitrary CSS classes. */
	labelClasses?: string;

	// Label (expanded) ---
	/** Set base classes. */
	labelExpandedBase?: string;
	/** Provide arbitrary CSS classes. */
	labelExpandedClasses?: string;

	// Events ---
	/** Triggers when the tile is clicked. */
	onclick?: (id: string) => void;

	// Snippets ---
	/** The default slot, used for icons. */
	children?: Snippet;
}
