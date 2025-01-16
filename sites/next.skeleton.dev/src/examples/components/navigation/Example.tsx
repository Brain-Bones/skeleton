import React from 'react';
import { Navigation } from '@skeletonlabs/skeleton-react';
import {
	Menu as IconMenu,
	Folder as IconFolder,
	Image as IconImage,
	Music as IconMusic,
	Video as IconVideo,
	Settings as IconSettings
} from 'lucide-react';

export const Page: React.FC = () => {
	return (
		<div className="card border-surface-100-900 grid h-[640px] w-full grid-cols-[auto_1fr] border-[1px]">
			{/* Component */}
			{/* prettier-ignore */}
			<Navigation.Rail
				header={<Navigation.Tile id="0" href="/" title="Menu"><IconMenu /></Navigation.Tile>}
				footer={<Navigation.Tile id="1" href="/settings" title="settings"><IconSettings /></Navigation.Tile>}
			>
				<Navigation.Tile id="2" label="Files" href="#"><IconFolder /></Navigation.Tile>
				<Navigation.Tile id="3" label="Images" href="#"><IconImage /></Navigation.Tile>
				<Navigation.Tile id="4" label="Music" href="#"><IconMusic /></Navigation.Tile>
				<Navigation.Tile id="5" label="Videos" href="#"><IconVideo /></Navigation.Tile>
			</Navigation.Rail>
			{/* Content */}
			<div className="flex items-center justify-center">
				<p className="opacity-20">(Content)</p>
			</div>
		</div>
	);
};
