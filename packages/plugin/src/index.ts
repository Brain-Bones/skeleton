import plugin from 'tailwindcss/plugin.js';
import { coreConfig, coreUtilities, getSkeletonClasses } from './tailwind/core.js';
import { themes, getThemeProperties } from './tailwind/themes/index.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';
import type { ConfigOptions, CustomTheme, PresetTheme } from './types.js';

const skeleton = plugin.withOptions<ConfigOptions>(
	// Plugin Creator
	(options) => {
		return ({ addBase, addComponents, addUtilities }) => {
			const { components, base } = getSkeletonClasses();
			let baseStyles: CSSRuleObject = {};

			// Base styles configuration
			if (options?.base !== false) {
				baseStyles = { ...base };
			}

			// Theme configuration
			options?.themes?.forEach((theme) => {
				// it's a preset theme but just the name was passed in
				if (typeof theme === 'string') {
					const themeName = theme;
					// we only want the properties
					baseStyles[`:root [data-theme='${themeName}']`] = themes[themeName].properties;
					return;
				}

				// it's a preset theme
				if (!('properties' in theme)) {
					baseStyles[`:root [data-theme='${theme.name}']`] = themes[theme.name].properties;

					if (theme.extras === true) {
						// extras are opt-in
						baseStyles = { ...baseStyles, ...themes[theme.name].extras };
					}
					return;
				}

				// it's a custom theme
				baseStyles[`:root [data-theme='${theme.name}']`] = theme.properties;
				baseStyles = { ...baseStyles, ...theme.extras };
			});

			addBase(baseStyles);
			addUtilities(coreUtilities);
			addComponents(components);
		};
	},
	// Config
	(options) => {
		return { ...coreConfig, prefix: options?.prefix };
	}
);

export { getThemeProperties, skeleton, CustomTheme, ConfigOptions, PresetTheme };
export default skeleton;
