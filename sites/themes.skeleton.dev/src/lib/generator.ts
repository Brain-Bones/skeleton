import chroma from 'chroma-js';

// Generates a color ramp with default settings
function genColorRamp(colorSettings: Record<string, string>) {
	const validatedSeed = colorSettings.seed.length === 7 ? colorSettings.seed : '#CCCCCC';
	return {
		50: chroma(validatedSeed).brighten(2.25).rgb(),
		100: chroma(validatedSeed).brighten(1.9).rgb(),
		200: chroma(validatedSeed).brighten(1.5).rgb(),
		300: chroma(validatedSeed).brighten(0.75).rgb(),
		400: chroma(validatedSeed).brighten(0.5).rgb(),
		500: chroma(validatedSeed).rgb(), // *
		600: chroma(validatedSeed).darken(0.5).rgb(),
		700: chroma(validatedSeed).darken(0.75).rgb(),
		800: chroma(validatedSeed).darken(1.5).rgb(),
		900: chroma(validatedSeed).darken(1.9).rgb(),
		950: chroma(validatedSeed).darken(2.25).rgb()
	};
}

// Loops the object of colors to generate a ramp per color
export function genColorPalette(stateFormColors: any) {
	let palette: any = {};
	Object.entries(stateFormColors).map(([colorName, colorSettings]: any) => {
		palette[colorName] = genColorRamp(colorSettings);
	});
	return palette;
}
