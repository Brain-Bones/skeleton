<!-- Navigation Rail Test Copmonent -->

<script lang="ts">
	import { Navigation } from '$lib/index.js';
	interface Props {
		rootProps?: Record<string, unknown>;
		childProps?: Record<string, unknown>;
	}
	let { rootProps, childProps }: Props = $props();
</script>

<!-- Rail -->
<Navigation.Rail {...rootProps}>
	{#snippet header()}
		<Navigation.Tile id="0" labelExpanded="HeaderTileExpanded" href="/" {...childProps}>HeaderTile</Navigation.Tile>
	{/snippet}
	{#snippet tiles()}
		<Navigation.Tile id="1" label="Files" href="/" {...childProps}>TileOne</Navigation.Tile>
		<Navigation.Tile id="2" label="Images" href="/" {...childProps}>TileTwo</Navigation.Tile>
	{/snippet}
	{#snippet footer()}
		<Navigation.Tile id="3" labelExpanded="FooterTileExpanded" href="/" {...childProps}>FooterTile</Navigation.Tile>
	{/snippet}
</Navigation.Rail>
