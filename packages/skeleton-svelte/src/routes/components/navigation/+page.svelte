<script lang="ts">
	import { Navigation } from '$lib/index.js';
	// Icons
	import IconLogo from 'lucide-svelte/icons/skull';
	import IconBox from 'lucide-svelte/icons/box';
	import IconSettings from 'lucide-svelte/icons/settings';

	let value = $state('0');
	let expanded = $state(false);

	function onChangeHandler(id: string) {
		console.log('parent:onChangeHandler', id);
	}

	function toggleExpanded() {
		expanded = !expanded;
	}
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Navigation</h1>
	</header>
	<section class="space-y-4">
		<h2 class="h2">Bar</h2>
		<pre class="pre">value: {value}</pre>
		<div class="w-[320px]">
			<Navigation.Bar bind:value onchange={onChangeHandler}>
				<Navigation.Tile id="0" label="Tile 1" labelExpanded="Expanded Tile 1">
					<IconBox />
				</Navigation.Tile>
				<Navigation.Tile id="1" label="Tile 2" labelExpanded="Expanded Tile 2">
					<IconBox />
				</Navigation.Tile>
				<Navigation.Tile id="2" label="Tile 3" labelExpanded="Expanded Tile 3">
					<IconBox />
				</Navigation.Tile>
				<Navigation.Tile id="3" label="Tile 4" labelExpanded="Expanded Tile 4">
					<IconBox />
				</Navigation.Tile>
			</Navigation.Bar>
		</div>
		<Navigation.Bar bind:value onchange={onChangeHandler}>
			<Navigation.Tile id="0" label="Tile 1" labelExpanded="Expanded Tile 1">
				<IconBox />
			</Navigation.Tile>
			<Navigation.Tile id="1" label="Tile 2" labelExpanded="Expanded Tile 2">
				<IconBox />
			</Navigation.Tile>
			<Navigation.Tile id="2" label="Tile 3" labelExpanded="Expanded Tile 3">
				<IconBox />
			</Navigation.Tile>
			<Navigation.Tile id="3" label="Tile 4" labelExpanded="Expanded Tile 4">
				<IconBox />
			</Navigation.Tile>
			<Navigation.Tile id="4" label="Tile 5" labelExpanded="Expanded Tile 5">
				<IconBox />
			</Navigation.Tile>
		</Navigation.Bar>
	</section>
	<section class="space-y-4">
		<header class="flex justify-between">
			<h2 class="h2">Rail</h2>
			<button class="btn preset-filled" onclick={toggleExpanded}>Toggle Expanded</button>
		</header>
		<div class="flex h-[960px] justify-center gap-10">
			<!-- Expanded -->
			<Navigation.Rail {expanded} classes="transition-all">
				{#snippet header()}
					<a href="/" class="flex aspect-square w-full flex-col items-center justify-center gap-2">
						<IconLogo size={expanded ? 48 : 24} />
						<span class="font-bold {expanded ? 'type-scale-5' : 'type-scale-1'}">Skeleton</span>
					</a>
				{/snippet}
				{#snippet tiles()}
					<Navigation.Tile id="0" label="Tile 1" labelExpanded="Expanded Tile 1" href="/page/1" selected>
						<IconBox />
					</Navigation.Tile>
					<Navigation.Tile id="1" label="Tile 2" labelExpanded="Expanded Tile 2" href="/page/2">
						<IconBox />
					</Navigation.Tile>
					<Navigation.Tile id="2" label="Tile 3" labelExpanded="Expanded Tile 3" href="/page/3">
						<IconBox />
					</Navigation.Tile>
					<Navigation.Tile id="3" label="Tile 4" labelExpanded="Expanded Tile 4" href="/page/4">
						<IconBox />
					</Navigation.Tile>
					<Navigation.Tile id="4" label="Tile 5" labelExpanded="Expanded Tile 5" href="/page/5">
						<IconBox />
					</Navigation.Tile>
				{/snippet}
				{#snippet footer()}
					<Navigation.Tile id="5" labelExpanded="Settings" href="/settings" title="Settings"><IconSettings /></Navigation.Tile>
				{/snippet}
			</Navigation.Rail>
		</div>
	</section>
</div>
