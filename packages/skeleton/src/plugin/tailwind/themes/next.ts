// import type { PresetTheme } from './index.js';

const next = {
	name: 'next',
	properties: {
		// Typography ---

		'--theme-font-family-base': 'system-ui',
		'--theme-font-family-heading': 'system-ui',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',

		// Borders / Radius

		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',

		'--theme-border-base': '1px',

		// Colors ---
		// '--color-primary-500': '236 72 153',

		// Primary
		'--on-primary': '0 0 0', // TODO: remove
		// ---
		'--color-primary-50': '242 247 253',
		'--color-primary-100': '229 237 249',
		'--color-primary-200': '197 219 242',
		'--color-primary-300': '146 189 231',
		'--color-primary-400': '87 154 217',
		'--color-primary-500': '49 126 198',
		'--color-primary-600': '32 93 158',
		'--color-primary-700': '29 79 135',
		'--color-primary-800': '27 68 113',
		'--color-primary-900': '28 58 94',
		'--color-primary-950': '19 37 62',
		// ---
		'--color-primary-contrast-dark': 'var(--color-primary-950)',
		'--color-primary-contrast-light': 'var(--color-primary-50)',
		// ---
		'--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-400': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-500': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-600': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-950': 'var(--color-primary-contrast-light)',

		// Secondary
		'--on-secondary': '255 255 255', // TODO: REMOVE
		// ---
		'--color-secondary-50': '237 239 255',
		'--color-secondary-100': '222 226 255',
		'--color-secondary-200': '196 201 255',
		'--color-secondary-300': '160 166 255',
		'--color-secondary-400': '114 111 255',
		'--color-secondary-500': '106 91 249',
		'--color-secondary-600': '91 61 238',
		'--color-secondary-700': '79 47 211',
		'--color-secondary-800': '64 41 170',
		'--color-secondary-900': '55 41 134',
		'--color-secondary-950': '34 24 78',
		// ---
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': 'var(--color-secondary-50)',
		// ---
		'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-400': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-500': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-600': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',

		// Tertiary
		'--on-tertiary': '0 0 0', // TODO: REMOVE
		// ---
		'--color-tertiary-50': '244 244 254',
		'--color-tertiary-100': '236 234 253',
		'--color-tertiary-200': '219 216 252',
		'--color-tertiary-300': '192 185 249',
		'--color-tertiary-400': '164 149 245',
		'--color-tertiary-500': '129 100 238',
		'--color-tertiary-600': '111 67 228',
		'--color-tertiary-700': '96 49 208',
		'--color-tertiary-800': '80 40 175',
		'--color-tertiary-900': '67 35 143',
		'--color-tertiary-950': '40 20 97',
		// ---
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		// ---
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',

		// Success
		'--on-success': '0 0 0', // TODO: REMOVE
		// ---
		'--color-success-50': '243 250 235',
		'--color-success-100': '228 243 212',
		'--color-success-200': '203 233 173',
		'--color-success-300': '171 218 127',
		'--color-success-400': '139 199 84',
		'--color-success-500': '107 172 54',
		'--color-success-600': '81 137 39',
		'--color-success-700': '63 105 34',
		'--color-success-800': '53 84 32',
		'--color-success-900': '47 72 31',
		'--color-success-950': '22 39 12',
		// ---
		'--color-success-contrast-dark': 'var(--color-success-950)',
		'--color-success-contrast-light': 'var(--color-success-50)',
		// ---
		'--color-success-contrast-50': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-100': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-200': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-300': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-400': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-500': 'var(--color-success-contrast-light)',
		'--color-success-contrast-600': 'var(--color-success-contrast-light)',
		'--color-success-contrast-700': 'var(--color-success-contrast-light)',
		'--color-success-contrast-800': 'var(--color-success-contrast-light)',
		'--color-success-contrast-900': 'var(--color-success-contrast-light)',
		'--color-success-contrast-950': 'var(--color-success-contrast-light)',

		// Warning
		'--on-warning': '0 0 0', // TODO: REMOVE
		// ---
		'--color-warning-50': '255 247 237',
		'--color-warning-100': '255 237 213',
		'--color-warning-200': '255 216 169',
		'--color-warning-300': '254 197 135',
		'--color-warning-400': '252 148 59',
		'--color-warning-500': '250 117 21',
		'--color-warning-600': '235 90 11',
		'--color-warning-700': '195 67 11',
		'--color-warning-800': '155 53 17',
		'--color-warning-900': '125 46 17',
		'--color-warning-950': '67 21 7',
		// ---
		'--color-warning-contrast-dark': 'var(--color-warning-950)',
		'--color-warning-contrast-light': 'var(--color-warning-50)',
		// ---
		'--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-500': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-600': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-700': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',

		// Error
		'--on-error': '255 255 255', // TODO: REMOVE
		// ---
		'--color-error-50': '255 241 243',
		'--color-error-100': '255 227 230',
		'--color-error-200': '255 204 212',
		'--color-error-300': '255 161 177',
		'--color-error-400': '255 124 149',
		'--color-error-500': '249 58 100',
		'--color-error-600': '231 23 79',
		'--color-error-700': '195 13 65',
		'--color-error-800': '163 14 62',
		'--color-error-900': '139 16 60',
		'--color-error-950': '78 3 27',
		// ---
		'--color-error-contrast-dark': 'var(--color-error-950)',
		'--color-error-contrast-light': 'var(--color-error-50)',
		// ---
		'--color-error-contrast-50': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-100': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-200': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-300': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-400': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-500': 'var(--color-error-contrast-light)',
		'--color-error-contrast-600': 'var(--color-error-contrast-light)',
		'--color-error-contrast-700': 'var(--color-error-contrast-light)',
		'--color-error-contrast-800': 'var(--color-error-contrast-light)',
		'--color-error-contrast-900': 'var(--color-error-contrast-light)',
		'--color-error-contrast-950': 'var(--color-error-contrast-light)',

		// Surface
		'--on-surface': '255 255 255', // TODO: REMOVE
		// ---
		'--color-surface-50': '250 250 249',
		'--color-surface-100': '245 245 244',
		'--color-surface-200': '231 229 228',
		'--color-surface-300': '214 211 209',
		'--color-surface-400': '168 162 158',
		'--color-surface-500': '120 113 108',
		'--color-surface-600': '87 83 78',
		'--color-surface-700': '68 64 60',
		'--color-surface-800': '41 37 36',
		'--color-surface-900': '23 25 26',
		'--color-surface-950': '17 17 20',
		// ---
		'--color-surface-contrast-dark': 'var(--color-surface-950)',
		'--color-surface-contrast-light': 'var(--color-surface-50)',
		// ---
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-500': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
	},
	properties_dark: {}, // TODO: REMOVE
	enhancements: {} // TODO: REMOVE
}; // satisfies PresetTheme;

export default next;
