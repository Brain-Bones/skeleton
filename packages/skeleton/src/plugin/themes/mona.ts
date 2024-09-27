import type { Theme } from './index.js';

const mona = {
	name: 'mona',
	properties: {
		'--type-scale-factor': '1.0',
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
		'--base-font-size': 'inherit',
		'--base-line-height': 'inherit',
		'--base-font-weight': 'normal',
		'--base-font-style': 'normal',
		'--base-letter-spacing': '0em',
		'--heading-font-color': 'inherit',
		'--heading-font-color-dark': 'inherit',
		'--heading-font-family': 'system-ui, sans-serif',
		'--heading-font-weight': '900',
		'--heading-font-style': 'normal',
		'--heading-letter-spacing': '0.025em',
		'--anchor-font-color': 'var(--color-tertiary-500)',
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
		'--radii-container': '12px',
		'--border-width-default': '1px',
		'--divide-width-default': '1px',
		'--outline-width-default': '1px',
		'--ring-width-default': '1px',
		'--body-background-color': '255 255 255',
		'--body-background-color-dark': 'var(--color-surface-950)',
		'--color-primary-50': '255 229 255',
		'--color-primary-100': '230 199 249',
		'--color-primary-200': '205 169 242',
		'--color-primary-300': '180 140 236',
		'--color-primary-400': '155 110 229',
		'--color-primary-500': '130 80 223',
		'--color-primary-600': '117 70 201',
		'--color-primary-700': '105 60 179',
		'--color-primary-800': '92 51 156',
		'--color-primary-900': '80 41 134',
		'--color-primary-950': '67 31 112',
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
		'--color-secondary-50': '214 255 224',
		'--color-secondary-100': '180 237 195',
		'--color-secondary-200': '146 219 166',
		'--color-secondary-300': '113 200 136',
		'--color-secondary-400': '79 182 107',
		'--color-secondary-500': '45 164 78',
		'--color-secondary-600': '36 141 62',
		'--color-secondary-700': '27 118 47',
		'--color-secondary-800': '18 96 31',
		'--color-secondary-900': '9 73 16',
		'--color-secondary-950': '0 50 0',
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': 'var(--color-secondary-50)',
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
		'--color-tertiary-50': '239 255 255',
		'--color-tertiary-100': '213 247 246',
		'--color-tertiary-200': '186 239 236',
		'--color-tertiary-300': '160 230 227',
		'--color-tertiary-400': '133 222 217',
		'--color-tertiary-500': '107 214 208',
		'--color-tertiary-600': '86 187 181',
		'--color-tertiary-700': '64 159 154',
		'--color-tertiary-800': '43 132 128',
		'--color-tertiary-900': '21 104 101',
		'--color-tertiary-950': '0 77 74',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
		'--color-success-50': '255 255 194',
		'--color-success-100': '238 250 155',
		'--color-success-200': '221 245 116',
		'--color-success-300': '203 239 78',
		'--color-success-400': '186 234 39',
		'--color-success-500': '169 229 0',
		'--color-success-600': '143 205 0',
		'--color-success-700': '117 180 0',
		'--color-success-800': '90 156 0',
		'--color-success-900': '64 131 0',
		'--color-success-950': '38 107 0',
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
		'--color-warning-50': '255 255 224',
		'--color-warning-100': '253 249 199',
		'--color-warning-200': '251 243 174',
		'--color-warning-300': '248 237 148',
		'--color-warning-400': '246 231 123',
		'--color-warning-500': '244 225 98',
		'--color-warning-600': '218 201 78',
		'--color-warning-700': '192 177 59',
		'--color-warning-800': '166 154 39',
		'--color-warning-900': '140 130 20',
		'--color-warning-950': '114 106 0',
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
		'--color-error-50': '251 228 198',
		'--color-error-100': '252 200 169',
		'--color-error-200': '253 172 140',
		'--color-error-300': '253 145 110',
		'--color-error-400': '254 117 81',
		'--color-error-500': '255 89 52',
		'--color-error-600': '230 77 47',
		'--color-error-700': '205 65 42',
		'--color-error-800': '180 52 38',
		'--color-error-900': '155 40 33',
		'--color-error-950': '130 28 28',
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
		'--color-surface-50': '255 255 255',
		'--color-surface-100': '231 231 232',
		'--color-surface-200': '207 207 209',
		'--color-surface-300': '182 184 185',
		'--color-surface-400': '158 160 162',
		'--color-surface-500': '134 136 139',
		'--color-surface-600': '110 112 116',
		'--color-surface-700': '86 88 93',
		'--color-surface-800': '61 65 69',
		'--color-surface-900': '37 41 46',
		'--color-surface-950': '13 17 23',
		'--color-surface-contrast-dark': 'var(--color-surface-950)',
		'--color-surface-contrast-light': 'var(--color-surface-50)',
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-500': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
	}
} satisfies Theme;

export default mona;
