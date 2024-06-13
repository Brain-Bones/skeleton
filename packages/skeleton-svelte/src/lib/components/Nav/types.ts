import type { Snippet } from 'svelte';

export interface NavigationProps {
	/** Enabled expanded mode. */
	expanded?: boolean;

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

	// Snippets (rail) ---
	/** The header snippet. */
	header?: Snippet;
	/** The tiles snippet. */
	tiles?: Snippet;
	/** The footer snippet. */
	footer?: Snippet;

	// Snippets (bar) ---
	/** The default children snippet. */
	children?: Snippet;
}

export interface NavTileProps {
	/** Provide a unique ID. */
	id?: string;
	/** Optionally provide an anchor href link. */
	href?: string;
	/** Provide the label text. */
	label?: string;
	/** Provide a longer label in expanded mode. */
	labelExpanded?: string;
	/** Provile a title attribute. */
	title?: string;
	/** Enable the active selected state. */
	selected?: boolean;

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
