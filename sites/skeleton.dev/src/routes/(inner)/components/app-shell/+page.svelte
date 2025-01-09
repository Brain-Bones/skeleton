<script lang="ts">
	// Docs
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	// Components
	import { AppShell, CodeBlock } from '@skeletonlabs/skeleton';
	// Sveld
	import sveldAppShell from '@skeletonlabs/skeleton/components/AppShell/AppShell.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'App Shell',
		description: 'Responsive shell for controlling application layout.',
		imports: ['AppShell'],
		source: 'packages/skeleton/src/lib/components/AppShell',
		components: [{ sveld: sveldAppShell }]
	};

	// Local
	let state = {
		header: true,
		pageHeader: false,
		sidebarLeft: true,
		sidebarRight: false,
		pageFooter: true,
		footer: false
	};

	function toggle(key: keyof typeof state): void {
		state[key] = !state[key];
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<!-- Alert -->
		<aside class="alert variant-ghost-error">
			<i class="fa-solid fa-triangle-exclamation text-4xl"></i>
			<div class="alert-message" data-toc-ignore>
				<h3 class="h3" data-toc-ignore>Deprecated</h3>
				<!-- prettier-ignore -->
				<p>
					This feature is being phased out as we transition to <a class="underline" href="https://github.com/skeletonlabs/skeleton/discussions/2375" target="_blank">Skeleton v3</a>. This component will remain functional for all 2.x releases. However, we recommend you migrate to <a class="underline" href="https://skeleton.dev/docs/guides/layouts" target="_blank">custom layouts</a> as soon as possible. While this guide is provided for Skeleton v3, the only prerequisite is Tailwind. Which means you can use these techniques today!
				</p>
			</div>
			<div class="alert-actions">
				<a class="btn variant-filled" href="https://skeleton.dev/docs/guides/layouts" target="_blank">Layout Guide</a>
			</div>
		</aside>
		<div class="space-y-2">
			<DocsPreview regionPreview="h-[280px]">
				<svelte:fragment slot="lead">
					<p class="w-full text-center">The shaded regions represent the portion of the page that scrolls vertically.</p>
				</svelte:fragment>
				<svelte:fragment slot="preview">
					<AppShell
						class="card h-full p-1"
						slotSidebarLeft="grid grid-cols-1"
						slotSidebarRight="grid grid-cols-1"
						slotPageContent="grid grid-cols-1"
					>
						<svelte:fragment slot="header">
							{#if state.header}
								<div class="card variant-soft p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs">header</div>
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="sidebarLeft">
							{#if state.sidebarLeft}
								<div class="card variant-soft p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs">sidebarLeft</div>
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="sidebarRight">
							{#if state.sidebarRight}
								<div class="card variant-soft p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs">sidebarRight</div>
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="pageHeader">
							{#if state.pageHeader}
								<div class="card variant-soft-primary p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs">pageHeader</div>
							{/if}
						</svelte:fragment>
						<svelte:fragment slot="pageFooter">
							{#if state.pageFooter}
								<div class="card variant-soft-primary p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs">pageFooter</div>
							{/if}
						</svelte:fragment>
						<!-- --- -->
						<div class="card variant-soft-primary p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs">
							{'<slot />'}
						</div>
						<!-- --- -->
						<svelte:fragment slot="footer">
							{#if state.footer}
								<div class="card variant-soft p-2 m-0.5 flex justify-center items-center overflow-hidden text-xs">footer</div>
							{/if}
						</svelte:fragment>
					</AppShell>
				</svelte:fragment>
				<svelte:fragment slot="source">
					<CodeBlock
						language="html"
						code={`
<AppShell>
	${state.header ? '<svelte:fragment slot="header">Header</svelte:fragment>' : '<!-- (header) -->'}
	${state.sidebarLeft ? '<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>' : '<!-- (sidebarLeft) -->'}
	${state.sidebarRight ? '<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>' : '<!-- (sidebarRight) -->'}
	${state.pageHeader ? '<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>' : '<!-- (pageHeader) -->'}
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	${state.pageFooter ? '<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>' : '<!-- (pageFooter) -->'}
	${state.footer ? '<svelte:fragment slot="footer">Footer</svelte:fragment>' : '<!-- (footer) -->'}
</AppShell>`}
					/>
				</svelte:fragment>
			</DocsPreview>
			<!-- prettier-ignore -->
			<div class="card p-4 mx-auto grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4">
				<button class="btn {state.header ? 'variant-filled' : 'variant-soft'}" on:click={() => { toggle('header'); }}>
					header
				</button>
					<button class="btn {state.sidebarLeft ? 'variant-filled' : 'variant-soft'}" on:click={() => { toggle('sidebarLeft'); }}>
					sidebarLeft
				</button>
					<button class="btn {state.sidebarRight ? 'variant-filled' : 'variant-soft'}" on:click={() => { toggle('sidebarRight'); }}>
					sidebarRight
				</button>
					<button class="btn {state.pageHeader ? 'variant-filled' : 'variant-soft'}" on:click={() => { toggle('pageHeader'); }}>
					pageHeader
				</button>
					<button class="btn {state.pageFooter ? 'variant-filled' : 'variant-soft'}" on:click={() => { toggle('pageFooter'); }}>
					pageFooter
				</button>
					<button class="btn {state.footer ? 'variant-filled' : 'variant-soft'}" on:click={() => { toggle('footer'); }}>
					footer
				</button>
			</div>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Implement the App Shell in your app's root layout in <code class="code">/src/routes/+layout.svelte</code>. Slot order does not
				matter.
			</p>
		</section>
		<section class="space-y-4">
			<div class="flex items-center space-x-2">
				<h2 class="h2">Prerequisites</h2>
				<span class="badge variant-filled-warning">Required</span>
			</div>
			<!-- prettier-ignore -->
			<p>
				The App Shell will need to expand to fill all available space within your app's <em>body</em> tag. Open <code class="code">/src/app.html</code> and add the following classes.
				<a class="anchor" href="https://github.com/sveltejs/kit/issues/6244#issuecomment-1226600661" target="_blank" rel="noreferrer">This wrapping element is required</a> and the style of <code class="code">display: contents</code> should remain.
			</p>
			<CodeBlock
				language="html"
				code={`<body>\n\t<div style="display: contents" class="h-full overflow-hidden">%sveltekit.body%</div>\n</body>`.trim()}
			/>
			<p>
				Then update your global stylesheet with the following. This will disable overflow for <em>html</em> and <em>body</em> tags to prevent
				duplicate scroll bars.
			</p>
			<CodeBlock language="css" code={`html, body { @apply h-full overflow-hidden; }`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Using an App Bar</h2>
			<p>
				If you wish for your <a class="anchor" href="/components/app-bar">App Bar</a> component to remain fixed at the top of the page,
				embed it into the top-most <code class="code">header</code> slot.
			</p>
			<CodeBlock
				language="html"
				code={`
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
	<!-- ... -->
</AppShell>`}
			/>
			<p>If you wish for your App Bar to scroll with the page, insert it into the <code class="code">pageHeader</code> slot.</p>
			<CodeBlock
				language="html"
				code={`
<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
	<!-- ... -->
</AppShell>`}
			/>
			<p>If you wish to have a sticky <code class="code">pageHeader</code>, apply the following App Shell prop styles.</p>
			<CodeBlock language="html" code={`<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">...</AppShell>`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Responsive Sidebars</h2>
			<p>
				Sidebars have a default width of <code class="code">auto</code>. This means they will automatically collapse when their contents are
				<em>empty</em>
				or
				<em>hidden</em>. Use this to remove the sidebar with CSS media queries via
				<a class="anchor" href="https://tailwindcss.com/docs/responsive-design" target="_blank" rel="noreferrer"
					>Tailwind's responsive breakpoints</a
				>.
			</p>
			<CodeBlock
				language="html"
				code={`
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="hidden lg:block">Sidebar</div>
	</svelte:fragment>
</AppShell>`}
			/>
			<aside class="alert variant-ghost-warning">
				<i class="fa-solid fa-lightbulb text-2xl"></i>
				<div class="alert-message">Consider hiding your sidebar for smaller screens and replace it with a Drawer.</div>
				<div class="alert-actions">
					<a href="/blog/how-to-implement-a-responsive-sidebar-drawer" target="_blank" rel="noreferrer" class="btn variant-filled">
						View Tutorial
					</a>
				</div>
			</aside>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Scroll to Top on Navigation</h2>
			<p>
				If you wish to have the App Shell page region auto-scroll to the top when navigating, add the following to your root layout in <code
					class="code">/src/routes/+layout.svelte</code
				>.
			</p>
			<CodeBlock
				language="ts"
				code={`
import type { AfterNavigate } from '@sveltejs/kit';
import { afterNavigate } from '$app/navigation';

afterNavigate((params: AfterNavigate) => {
    const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
    const elemPage = document.querySelector('#page');
    if (isNewPage && elemPage !== null) {
        elemPage.scrollTop = 0;
    }
});
`}
			/>
		</section>
		<section class="space-y-4">
			<h2 class="h2">Tracking Scroll Position</h2>
			<p>Use the <code class="code">on:scroll</code> event to detect when the page region is scrolled vertically.</p>
			<CodeBlock
				language="ts"
				code={`
import type { ComponentEvents } from 'svelte';

function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
	console.log(event.currentTarget.scrollTop);
}
`}
			/>
			<CodeBlock language="html" code={`<AppShell ... on:scroll={scrollHandler}>`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Scrollbar Gutter</h2>
			<!-- prettier-ignore -->
			<p>
				Use the <a class="anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter" target="_blank">scrollbar gutter</a> property to adjust how the page region scrollbar gutters are handled. View a <a class="anchor" href="https://www.youtube.com/shorts/mg49F9qUs38" target="_blank">quick demo video</a>.
			</p>
			<CodeBlock language="ts" code={`<AppShell scrollbarGutter="auto">...</AppShell>`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Accessibility</h2>
			<p>
				Please be aware that the App Shell does not support window scoped scrolling. This may affect certain features, such as
				pull-to-refresh on mobile. In order to scroll the page region you first need to focus the page with either a touch or click. If you
				require window scoped scrolling we recommend you implement a custom layout in place of the App Shell.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
