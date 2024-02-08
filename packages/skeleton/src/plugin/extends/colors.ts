// Skeleton Colors
// https://tailwindcss.com/docs/customizing-colors#using-css-variables

import settings from '../settings.js';

type Shade = { [shadeValue: number]: string };
type Palette = { [colorName: string]: Shade };

function generatePaletteRamp(colorName: string, suffix: string) {
	const shadeObj: Shade = {};
	// Loop Shades (50-950)
	// Example:`50: 'rgb(var(--color-primary-50) / <alpha-value>)'`
	// Example:`50: 'rgb(var(--color-primary-contrast-50) / <alpha-value>)'`
	settings.colorShades.forEach((s) => (shadeObj[s] = `rgb(var(--color-${colorName}${suffix}-${s}) / <alpha-value>)`));
	return shadeObj;
}

export const extendColors = () => {
	const colorPalette: Palette = {
		// https://tailwindcss.com/docs/background-color#arbitrary-values
		'body-color': 'rgb(var(--body-background-color))',
		'body-color-dark': 'rgb(var(--body-background-color-dark))'
	};
	// Loop Color Names
	settings.colorNames.forEach((colorName) => {
		// Generate Base Colors
		colorPalette[colorName] = generatePaletteRamp(colorName, '');
		// Generate Contrast Colors
		colorPalette[`${colorName}-contrast`] = generatePaletteRamp(colorName, '-contrast');
	});
	return {
		colors: colorPalette
	};
};

export default extendColors;
