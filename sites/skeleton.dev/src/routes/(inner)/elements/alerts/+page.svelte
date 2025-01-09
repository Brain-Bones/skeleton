<script lang="ts">
	import { faker } from '@faker-js/faker';

	// Docs
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';
	import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';
	import { variants } from '$lib/components/DocsPreview/options';
	// Components
	import { CodeBlock } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Alerts',
		description: 'Displays customizable alerts to attract attention and provide critical actions.',
		stylesheetIncludes: ['all', 'elements'],
		stylesheets: ['elements/alerts'],
		source: 'packages/plugin/src/styles/components/alerts.css',
		classes: [
			['<code class="code">alert</code>', '', 'Provide basic alert styles to a block element.'],
			['<code class="code">alert-message</code>', '', 'The message body styles. Contains a title and message.'],
			['<code class="code">alert-actions</code>', '', 'The message action styles. Contains buttons.']
		]
	};

	// Local
	let currentVariant = 'variant-filled-error';
	const message = faker.lorem.paragraph();
	// Functions
	function triggerAction(): void {
		alert('The "Action" button was pressed!');
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<DocsPreview>
			<svelte:fragment slot="preview">
				<!-- Primary -->
				<aside class="alert {currentVariant}">
					<i class="fa-solid fa-triangle-exclamation text-4xl"></i>
					<div class="alert-message" data-toc-ignore>
						<h3 class="h3" data-toc-ignore>Warning</h3>
						<p>{message}</p>
					</div>
					<div class="alert-actions">
						<button class="btn variant-filled" on:click={triggerAction}>Action</button>
						<button class="btn-icon variant-filled"><i class="fa-solid fa-xmark"></i></button>
					</div>
				</aside>
			</svelte:fragment>
			<svelte:fragment slot="footer">
				<div class="flex justify-center gap-4">
					<select bind:value={currentVariant} class="select w-auto">
						{#each variants as vSet}
							<optgroup label={vSet.label}>
								{#each vSet.list as v}
									<option value={v}>{v}</option>
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="source">
				<CodeBlock language="ts" code={`let visible: boolean = true;`} />
				<CodeBlock
					language="html"
					code={`
{#if visible}
    <aside class="alert variant-ghost">
        <!-- Icon -->
        <div>(icon)</div>
        <!-- Message -->
        <div class="alert-message">
            <h3 class="h3">(title)</h3>
            <p>{message}</p>
        </div>
        <!-- Actions -->
        <div class="alert-actions">(buttons)</div>
    </aside>
{/if}
            `}
				/>
			</svelte:fragment>
		</DocsPreview>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>
			Create an element with the <code class="code">.alert</code> class. Wrap the alert in a Svelte <code class="code">#if</code> statement to
			hide it or make it visible.
		</p>
		<section class="space-y-4">
			<h2 class="h2">Sections</h2>
			<h3 class="h3">Message Content</h3>
			<p>
				Use the <code class="code">.alert-message</code> to create a vertical set of text information that fills the available width of the alert.
			</p>
			<CodeBlock language="html" code={`<div class="alert-message">\n\t<h3 class="h3">(title)</h3>\n\t<p>{message}</p>\n</div>`} />
			<CodeBlock language="html" code={`<h3 class="alert-message">(title)</h3>`} />
			<h3 class="h3">Action Buttons</h3>
			<p>Use the <code class="code">.alert-actions</code> to create a trailing area to house interactive action buttons.</p>
			<CodeBlock language="html" code={`<div class="alert-actions">(buttons)</div>`} />
		</section>
		<section class="space-y-4">
			<h2 class="h2">Animation</h2>
			<!-- prettier-ignore -->
			<p><a class="anchor" href="https://v4.svelte.dev/tutorial/transition" target="_blank" rel="noreferrer">Svelte Transitions</a> can provide smooth transition animations when the alert state changes.</p>
			<CodeBlock language="html" code={`<aside class="alert" transition:fade={{ duration: 200 }}>(content)</aside>`} />
		</section>
	</svelte:fragment>
</DocsShell>
