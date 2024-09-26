// Import Theme File
// Read upload theme file, updates local generator state.

import chroma from 'chroma-js';
import { settingsCore } from '$lib/state/generator.svelte';
import { formatColors, formatEdgesLegacy } from './format-input';
import * as constants from '$lib/constants/generator';

export async function importThemeFile(file: File) {
	const fileText = await file.text();

	// Determine if v2 Legacy Mode
	const ifLegacyMode = fileText.includes('--on-primary');

	// Create array for each line
	// https://stackoverflow.com/a/5035058
	const lines = fileText.match(/[^\r\n]+/g)!;

	// Filter only CSS custom property lines
	const linesFiltered = lines.filter((line) => line.includes('--'));

	// Format each line
	const lineMapped = linesFiltered.map((line) => {
		return (line = line
			.replaceAll('\t', '') // tabbing
			// .replaceAll('\\"', '') // backslash
			.replaceAll(`',`, '') // final comma
			.replaceAll(`'`, '')); // open/close quotes
	});

	// Create key/value object
	const properties: Record<string, string> = {};
	lineMapped.forEach((line) => {
		const [key, value] = line.split(': ');
		properties[key] = value;
	});

	// If v2 Mode is Enabled
	if (ifLegacyMode) {
		constants.colorNames.forEach((colorName) => {
			properties[`--color-${colorName}-950`] = chroma(`rgb(${properties[`--color-${colorName}-900`].split(' ')})`)
				.darken(0.2)
				.rgb()
				.join(' ');
		});
	}

	// console.log(JSON.stringify(properties, null, 2));

	settingsCore.name = 'Custom';
	formatColors(properties);
	if (ifLegacyMode) formatEdgesLegacy(properties);
}
