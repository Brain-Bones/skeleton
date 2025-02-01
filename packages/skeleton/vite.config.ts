import { defineConfig } from 'vite';
import fg from "fast-glob";
import { generateColorPairings } from "./src/computed/color-pairings.js";
import { generatePresets } from "./src/computed/presets.js";

export default defineConfig({
	build: {
		cssCodeSplit: true,
		lib: {
			entry: [
				'src/static/base.css',
				'src/static/components.css',
				'src/themes/cerberus.css'
			]
		}
	},
	plugins: [{
		name: 'skeleton-computed-chunks',
		apply: 'build',
		async buildStart() {
			const files = await fg('./src/computed/*.ts');
			for (const file of files) {
				this.addWatchFile(file);
			}
			this.emitFile({
				fileName: 'color-pairings.css',
				type: 'prebuilt-chunk',
				code: JSON.stringify(generateColorPairings()),
			});
			this.emitFile({
				fileName: 'presets.css',
				type: 'prebuilt-chunk',
				code: JSON.stringify(generatePresets()),
			});
			this.emitFile({
				fileName: 'index.css',
				type: 'prebuilt-chunk',
				code: `
				@import './base.css';
				@import './components.css';
				@import './presets.css';
				@import './color-pairings.css';
				`.trim()
			})
		}
	}],
});
