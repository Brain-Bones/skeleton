'use client';

import React, { createContext, useContext, useId } from 'react';
import { NavContextState, NavRailProps, NavBarProps, NavTileProps } from './types.js';

// Contexts ---

export const NavContext = createContext<NavContextState>({
	parent: 'none',
	value: '',
	expanded: false,
	onSelectionHandler: () => {}
});

// Components ---

export const NavRail: React.FC<NavRailProps> = ({
	value = '',
	expanded = false,
	// Root
	base = 'flex flex-col',
	background = 'preset-filled-surface-100-900',
	padding = 'p-1',
	width = 'w-24',
	widthExpanded = 'w-64',
	height = 'h-full',
	classes = '',
	// Header
	headerBase = 'flex',
	headerFlexDirection = 'flex-col',
	headerJustify = 'justify-center',
	headerItems = 'items-center',
	headerGap = 'gap-1',
	headerClasses = '',
	// Tiles
	tilesBase = 'flex-1 flex',
	tilesFlexDirection = 'flex-col',
	tilesJustify = 'justify-center',
	tilesItems = 'items-center',
	tilesGap = 'gap-1',
	tilesClasses = '',
	// Footer
	footerBase = 'flex',
	footerFlexDirection = 'flex-col',
	footerJustify = 'justify-center',
	footerItems = 'items-center',
	footerGap = 'gap-1',
	footerClasses = '',
	// Events
	onChange,
	// Snippets
	header,
	children,
	footer
}) => {
	function onSelectionHandler(id: string) {
		value = id;
		if (onChange) onChange(id);
	}

	// Set Context
	const ctx = {
		parent: 'rail',
		value,
		expanded,
		onSelectionHandler
	};

	// Reactive
	const rxWidth = expanded ? widthExpanded : width;

	return (
		<aside className={`${base} ${background} ${height} ${padding} ${rxWidth} ${classes}`} data-testid="nav-rail">
			<NavContext.Provider value={ctx}>
				{/* Header */}
				{header ? (
					<header
						className={`${headerBase} ${headerFlexDirection} ${headerJustify} ${headerItems} ${headerGap} ${headerClasses}`}
						data-testid="nav-rail-header"
					>
						{header}
					</header>
				) : null}
				{/* Tiles */}
				{children ? (
					<nav
						className={`${tilesBase} ${tilesFlexDirection} ${tilesJustify} ${tilesItems} ${tilesGap} ${tilesClasses}`}
						data-testid="nav-rail-tiles"
					>
						{children}
					</nav>
				) : null}
				{/* Footer */}
				{footer ? (
					<footer
						className={`${footerBase} ${footerFlexDirection} ${footerJustify} ${footerItems} ${footerGap} ${footerClasses}`}
						data-testid="nav-rail-footer"
					>
						{footer}
					</footer>
				) : null}
			</NavContext.Provider>
		</aside>
	);
};

export const NavBar: React.FC<NavBarProps> = ({
	value = '',
	// Root
	base = 'h-full flex flex-col',
	background = 'preset-filled-surface-100-900',
	width = 'min-w-[320px] w-full',
	height = 'h-20',
	padding = 'p-1',
	classes = '',
	// Tiles
	tilesBase = 'flex-1 flex',
	tilesFlexDirection = '',
	tilesJustify = 'justify-center',
	tilesItems = 'items-center',
	tilesGap = 'gap-1',
	tilesClasses = '',
	// Events
	onChange,
	// Snippets
	children
}) => {
	function onSelectionHandler(id: string) {
		value = id;
		if (onChange) onChange(id);
	}

	// Set Context
	const ctx = {
		parent: 'bar',
		value,
		expanded: false,
		onSelectionHandler
	};

	return (
		<aside className={`${base} ${background} ${width} ${height} ${padding} ${classes}`} data-testid="nav-bar">
			<NavContext.Provider value={ctx}>
				{children ? (
					<nav className={`${tilesBase} ${tilesFlexDirection} ${tilesJustify} ${tilesItems} ${tilesGap} ${tilesClasses}`}>{children}</nav>
				) : null}
			</NavContext.Provider>
		</aside>
	);
};

export const NavTile: React.FC<NavTileProps> = ({
	id,
	href,
	target,
	label,
	labelExpanded,
	title,
	selected = false,
	type = 'button',
	// Root
	base = 'flex items-center',
	width = 'w-full',
	aspect = 'aspect-square',
	background = '',
	hover = 'hover:preset-filled-surface-50-950',
	active = 'preset-filled-primary-500',
	padding = 'p-2',
	gap = 'gap-1',
	rounded = 'rounded-container',
	classes = 'flex-col justify-center',
	// Expanded
	expandedPadding = 'py-3 px-4',
	expandedGap = 'gap-4',
	expandedClasses = '',
	// Label (base)
	labelBase = 'type-scale-1',
	labelClasses = '',
	// Label (expanded)
	labelExpandedBase = '',
	labelExpandedClasses = '',
	// Events
	onClick,
	// Snippets
	children
}) => {
	// Get Context
	const ctx = useContext<NavContextState>(NavContext);

	const generatedId = useId();
	if (!id) {
		id = generatedId;
	}

	// Local
	const TileElement = href ? 'a' : 'button';
	const role = href ? undefined : 'button';

	// Reactive
	const rxSize = ctx.parent === 'bar' ? `h-full` : `${aspect}`;
	const classesCollapsed = `${rxSize} ${padding} ${gap} ${classes}`;
	const classesExtended = `${expandedPadding} ${expandedGap} ${expandedClasses}`;
	const rxMode = ctx.expanded ? classesExtended : classesCollapsed;
	const rxBackground = selected || ctx.value === id ? active : `${background} ${hover}`;

	function onClickHandler() {
		if (onClick && !id) throw new Error('No ID was provided');
		if (onClick && id) onClick(id);
		if (ctx.onSelectionHandler && id) ctx.onSelectionHandler(id);
	}

	return (
		<TileElement
			className={`${base} ${width} ${rounded} ${rxBackground} ${rxMode}`}
			href={href}
			target={target}
			type={TileElement === 'button' ? type : undefined}
			title={title}
			role={role}
			onClick={onClickHandler}
			data-parent={ctx.parent}
			data-expanded={ctx.expanded}
			data-testid="nav-tile"
		>
			{/* Icon */}
			{children && <div>{children}</div>}
			{/* Label (base) */}
			{label && !ctx.expanded && (
				<div className={`${labelBase} ${labelClasses}`} data-testid="nav-tile-label">
					{label}
				</div>
			)}
			{/* Label (expanded) */}
			{labelExpanded && ctx.expanded && (
				<div className={`${labelExpandedBase} ${labelExpandedClasses}`} data-testid="nav-tile-label-expanded">
					{labelExpanded}
				</div>
			)}
		</TileElement>
	);
};

// Exports ---

export const Navigation = Object.assign(() => null, {
	Rail: NavRail,
	Bar: NavBar,
	Tile: NavTile
});
