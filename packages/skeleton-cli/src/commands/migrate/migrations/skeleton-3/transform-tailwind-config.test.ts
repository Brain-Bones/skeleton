import { describe, expect, it } from 'vitest';
import { transformTailwindConfigContent } from './transform-tailwind-config.js';

describe('transformTailwindConfigContent', () => {
	it('transforms a config', () => {
		expect(
			transformTailwindConfigContent(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	plugins: [
		skeleton({
			themes: {
				preset: ["skeleton"]
			}
		})
	]
}
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		contentPath(import.meta.url, "svelte")
	],
	plugins: [
		skeleton({
			themes: [themes.legacy]
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms a config with alternative content ordering', () => {
		expect(
			transformTailwindConfigContent(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"),
		"./src/**/*.{html,js,svelte,ts}"
	],
	plugins: [
		skeleton({
			themes: {
				preset: ["skeleton"]
			}
		})
	]
}
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		contentPath(import.meta.url, "svelte"),
		"./src/**/*.{html,js,svelte,ts}"
	],
	plugins: [
		skeleton({
			themes: [themes.legacy]
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms a config with alternative preset notation', () => {
		expect(
			transformTailwindConfigContent(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	plugins: [
		skeleton({
			themes: {
				preset: [{ name: "skeleton", enhancements: true }]
			}
		})
	]
}
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		contentPath(import.meta.url, "svelte")
	],
	plugins: [
		skeleton({
			themes: [themes.legacy]
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('transforms a config with custom themes', () => {
		expect(
			transformTailwindConfigContent(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	plugins: [
		skeleton({
			themes: {
				custom: [myCustomTheme]
			}
		})
	]
}
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
/**
 * Custom themes were detected and commented out due to them not being compatible with the V3 theme format.
 * See https://github.com/skeletonlabs/skeleton/discussions/2921 for info on how to migrate these yourself.
 */
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		contentPath(import.meta.url, "svelte")
	],
	plugins: [
		skeleton({
			themes: [/* myCustomTheme */, themes.cerberus]
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});

	it('transforms a config while preserving other plugin options', () => {
		expect(
			transformTailwindConfigContent(`
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	plugins: [
		skeleton({
			base: true,
			themes: {
				preset: ["skeleton"]
			},
			prefix: "sk-"
		})
	]
}
		`)
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
import { skeleton, contentPath } from "@skeletonlabs/skeleton/plugin";
import * as themes from "@skeletonlabs/skeleton/themes";

export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		contentPath(import.meta.url, "svelte")
	],
	plugins: [
		skeleton({
			base: true,
			themes: [themes.legacy],
			prefix: "sk-"
		})
	]
}
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
});
