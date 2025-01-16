<script lang="ts">
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import IconBox from 'lucide-svelte/icons/box';

	let hrefExample = '#';
</script>

<div class="card preset-filled-surface-100-900 grid grid-cols-3 gap-5 p-5">
	<!-- By default tiles are <button> elements -->
	<Navigation.Tile id="0" label="Button">
		<IconBox />
	</Navigation.Tile>
	<!-- Add selected to button tiles to enable the active state -->
	<Navigation.Tile id="1" label="Button" selected>
		<IconBox />
	</Navigation.Tile>
	<!-- When adding an href, they are converted to anchors -->
	<Navigation.Tile id="2" label="Anchor" href={hrefExample}>
		<IconBox />
	</Navigation.Tile>
</div>
