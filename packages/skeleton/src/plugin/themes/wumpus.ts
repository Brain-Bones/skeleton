import type { Theme } from './index.js';

const wumpus = {
	name: 'wumpus',
	properties: {
		'--type-scale-factor': '1.067',
		'--type-scale-1': 'calc(0.75rem * var(--type-scale-factor))',
		'--type-scale-2': 'calc(0.875rem * var(--type-scale-factor))',
		'--type-scale-3': 'calc(1rem * var(--type-scale-factor))',
		'--type-scale-4': 'calc(1.125rem * var(--type-scale-factor))',
		'--type-scale-5': 'calc(1.25rem * var(--type-scale-factor))',
		'--type-scale-6': 'calc(1.5rem * var(--type-scale-factor))',
		'--type-scale-7': 'calc(1.875rem * var(--type-scale-factor))',
		'--type-scale-8': 'calc(2.25rem * var(--type-scale-factor))',
		'--type-scale-9': 'calc(3rem * var(--type-scale-factor))',
		'--type-scale-10': 'calc(3.75rem * var(--type-scale-factor))',
		'--type-scale-11': 'calc(4.5rem * var(--type-scale-factor))',
		'--type-scale-12': 'calc(6rem * var(--type-scale-factor))',
		'--type-scale-13': 'calc(8rem * var(--type-scale-factor))',
		'--base-font-color': 'var(--color-surface-950)',
		'--base-font-color-dark': 'var(--color-surface-50)',
		'--base-font-family': 'system-ui, sans-serif',
		'--base-font-size': '18px',
		'--base-line-height': '28px',
		'--base-font-weight': 'normal',
		'--base-font-style': 'normal',
		'--base-letter-spacing': '0em',
		'--heading-font-color': 'inherit',
		'--heading-font-color-dark': 'inherit',
		'--heading-font-family': 'Seravek, Gill Sans Nova, Ubuntu, Calibri, DejaVu Sans, source-sans-pro, sans-serif',
		'--heading-font-weight': 'bold',
		'--heading-font-style': 'normal',
		'--heading-letter-spacing': '0.025em',
		'--anchor-font-color': 'var(--color-tertiary-600)',
		'--anchor-font-color-dark': 'var(--color-tertiary-500)',
		'--anchor-font-family': 'inherit',
		'--anchor-font-size': 'inherit',
		'--anchor-line-height': 'inherit',
		'--anchor-font-weight': 'inherit',
		'--anchor-font-style': 'inherit',
		'--anchor-letter-spacing': 'inherit',
		'--anchor-text-decoration': 'none',
		'--anchor-text-decoration-hover': 'underline',
		'--anchor-text-decoration-active': 'none',
		'--anchor-text-decoration-focus': 'none',
		'--space-scale-factor': '1',
		'--radii-default': '4px',
		'--radii-container': '24px',
		'--border-width-default': '0px',
		'--divide-width-default': '1px',
		'--outline-width-default': '1px',
		'--ring-width-default': '1px',
		'--body-background-color': '255 255 255',
		'--body-background-color-dark': 'var(--color-surface-900)',
		'--color-primary-50': '229 234 255',
		'--color-primary-100': '201 207 252',
		'--color-primary-200': '173 181 250',
		'--color-primary-300': '144 154 247',
		'--color-primary-400': '116 128 245',
		'--color-primary-500': '88 101 242',
		'--color-primary-600': '75 86 231',
		'--color-primary-700': '62 72 220',
		'--color-primary-800': '48 57 209',
		'--color-primary-900': '35 43 198',
		'--color-primary-950': '22 28 187',
		'--color-primary-contrast-dark': 'var(--color-primary-950)',
		'--color-primary-contrast-light': 'var(--color-primary-50)',
		'--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-500': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-600': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-950': 'var(--color-primary-contrast-light)',
		'--color-secondary-50': '255 202 255',
		'--color-secondary-100': '251 156 209',
		'--color-secondary-200': '247 134 196',
		'--color-secondary-300': '243 113 184',
		'--color-secondary-400': '239 91 171',
		'--color-secondary-500': '235 69 158',
		'--color-secondary-600': '208 63 140',
		'--color-secondary-700': '180 57 122',
		'--color-secondary-800': '153 51 104',
		'--color-secondary-900': '125 45 86',
		'--color-secondary-950': '88 40 65',
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': '255 255 255',
		'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-400': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-500': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-600': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',
		'--color-tertiary-50': '215 255 255',
		'--color-tertiary-100': '186 237 253',
		'--color-tertiary-200': '157 218 250',
		'--color-tertiary-300': '129 200 248',
		'--color-tertiary-400': '100 181 245',
		'--color-tertiary-500': '71 163 243',
		'--color-tertiary-600': '61 144 220',
		'--color-tertiary-700': '51 125 196',
		'--color-tertiary-800': '41 107 173',
		'--color-tertiary-900': '31 88 149',
		'--color-tertiary-950': '21 69 126',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
		'--color-success-50': '228 255 255',
		'--color-success-100': '200 252 231',
		'--color-success-200': '172 250 207',
		'--color-success-300': '143 247 183',
		'--color-success-400': '115 245 159',
		'--color-success-500': '87 242 135',
		'--color-success-600': '70 217 112',
		'--color-success-700': '52 192 89',
		'--color-success-800': '35 166 65',
		'--color-success-900': '17 141 42',
		'--color-success-950': '0 116 19',
		'--color-success-contrast-dark': 'var(--color-success-950)',
		'--color-success-contrast-light': 'var(--color-success-50)',
		'--color-success-contrast-50': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-100': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-200': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-300': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-400': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-500': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-600': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-700': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-800': 'var(--color-success-contrast-light)',
		'--color-success-contrast-900': 'var(--color-success-contrast-light)',
		'--color-success-contrast-950': 'var(--color-success-contrast-light)',
		'--color-warning-50': '255 255 219',
		'--color-warning-100': '255 250 194',
		'--color-warning-200': '255 245 168',
		'--color-warning-300': '254 241 143',
		'--color-warning-400': '254 236 117',
		'--color-warning-500': '254 231 92',
		'--color-warning-600': '232 209 74',
		'--color-warning-700': '210 187 57',
		'--color-warning-800': '188 165 39',
		'--color-warning-900': '166 143 22',
		'--color-warning-950': '144 121 4',
		'--color-warning-contrast-dark': 'var(--color-warning-950)',
		'--color-warning-contrast-light': 'var(--color-warning-50)',
		'--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-600': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-700': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',
		'--color-error-50': '255 213 204',
		'--color-error-100': '251 184 177',
		'--color-error-200': '248 154 150',
		'--color-error-300': '244 125 123',
		'--color-error-400': '241 95 96',
		'--color-error-500': '237 66 69',
		'--color-error-600': '214 53 55',
		'--color-error-700': '191 40 41',
		'--color-error-800': '168 26 28',
		'--color-error-900': '145 13 14',
		'--color-error-950': '122 0 0',
		'--color-error-contrast-dark': 'var(--color-error-950)',
		'--color-error-contrast-light': 'var(--color-error-50)',
		'--color-error-contrast-50': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-100': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-200': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-300': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-400': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-500': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-600': 'var(--color-error-contrast-light)',
		'--color-error-contrast-700': 'var(--color-error-contrast-light)',
		'--color-error-contrast-800': 'var(--color-error-contrast-light)',
		'--color-error-contrast-900': 'var(--color-error-contrast-light)',
		'--color-error-contrast-950': 'var(--color-error-contrast-light)',
		'--color-surface-50': '245 245 245',
		'--color-surface-100': '215 215 217',
		'--color-surface-200': '185 185 189',
		'--color-surface-300': '154 156 160',
		'--color-surface-400': '124 126 132',
		'--color-surface-500': '94 96 104',
		'--color-surface-600': '81 83 90',
		'--color-surface-700': '68 70 76',
		'--color-surface-800': '56 56 62',
		'--color-surface-900': '43 43 48',
		'--color-surface-950': '30 30 34',
		'--color-surface-contrast-dark': 'var(--color-surface-950)',
		'--color-surface-contrast-light': 'var(--color-surface-50)',
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-500': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
	}
} satisfies Theme;

export default wumpus;
