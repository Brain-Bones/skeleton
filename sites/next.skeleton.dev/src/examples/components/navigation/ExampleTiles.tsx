import React from 'react';
import { Navigation } from '@skeletonlabs/skeleton-react';
import { Box as IconBox } from 'lucide-react';

export const Page: React.FC = () => {
	return (
		<div className="card preset-filled-surface-100-900 grid grid-cols-3 gap-5 p-5">
			{/* By default tiles are <button> elements */}
			<Navigation.Tile id="0" label="Button">
				<IconBox />
			</Navigation.Tile>
			{/* Add selected to button tiles to enable the active state */}
			<Navigation.Tile id="1" label="Button" selected>
				<IconBox />
			</Navigation.Tile>
			{/* When adding an href, they are converted to anchors */}
			<Navigation.Tile id="2" label="Anchor" href="#">
				<IconBox />
			</Navigation.Tile>
		</div>
	);
};
