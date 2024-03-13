import type { PresetTheme } from '../index.js';

const rocket = {
	name: 'rocket',
	properties: {
		'--theme-font-family-base': 'system-ui',
		'--theme-font-family-heading': "'Space Grotesk', sans-serif",
		'--theme-font-color-base': 'var(--color-primary-900)',
		'--theme-font-color-dark': 'var(--color-primary-100)',
		'--theme-rounded-base': '0px',
		'--theme-rounded-container': '0px',
		'--theme-border-base': '0px',
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		'--color-primary-50': '218 244 249',
		'--color-primary-100': '205 240 246',
		'--color-primary-200': '193 237 244',
		'--color-primary-300': '155 226 238',
		'--color-primary-400': '81 204 225',
		'--color-primary-500': '6 182 212',
		'--color-primary-600': '5 164 191',
		'--color-primary-700': '5 137 159',
		'--color-primary-800': '4 109 127',
		'--color-primary-900': '3 89 104',
		'--color-secondary-50': '226 236 254',
		'--color-secondary-100': '216 230 253',
		'--color-secondary-200': '206 224 253',
		'--color-secondary-300': '177 205 251',
		'--color-secondary-400': '118 168 249',
		'--color-secondary-500': '59 130 246',
		'--color-secondary-600': '53 117 221',
		'--color-secondary-700': '44 98 185',
		'--color-secondary-800': '35 78 148',
		'--color-secondary-900': '29 64 121',
		'--color-tertiary-50': '242 230 254',
		'--color-tertiary-100': '238 221 253',
		'--color-tertiary-200': '233 213 253',
		'--color-tertiary-300': '220 187 252',
		'--color-tertiary-400': '194 136 249',
		'--color-tertiary-500': '168 85 247',
		'--color-tertiary-600': '151 77 222',
		'--color-tertiary-700': '126 64 185',
		'--color-tertiary-800': '101 51 148',
		'--color-tertiary-900': '82 42 121',
		'--color-success-50': '228 247 220',
		'--color-success-100': '219 245 208',
		'--color-success-200': '210 242 197',
		'--color-success-300': '183 234 161',
		'--color-success-400': '130 219 91',
		'--color-success-500': '76 203 21',
		'--color-success-600': '68 183 19',
		'--color-success-700': '57 152 16',
		'--color-success-800': '46 122 13',
		'--color-success-900': '37 99 10',
		'--color-warning-50': '253 246 223',
		'--color-warning-100': '253 243 212',
		'--color-warning-200': '252 240 202',
		'--color-warning-300': '251 230 170',
		'--color-warning-400': '247 212 106',
		'--color-warning-500': '244 193 42',
		'--color-warning-600': '220 174 38',
		'--color-warning-700': '183 145 32',
		'--color-warning-800': '146 116 25',
		'--color-warning-900': '120 95 21',
		'--color-error-50': '244 223 230',
		'--color-error-100': '240 213 221',
		'--color-error-200': '237 202 213',
		'--color-error-300': '225 171 187',
		'--color-error-400': '203 107 136',
		'--color-error-500': '181 44 85',
		'--color-error-600': '163 40 77',
		'--color-error-700': '136 33 64',
		'--color-error-800': '109 26 51',
		'--color-error-900': '89 22 42',
		'--color-surface-50': '232 234 238',
		'--color-surface-100': '224 227 232',
		'--color-surface-200': '216 220 226',
		'--color-surface-300': '193 199 209',
		'--color-surface-400': '147 158 174',
		'--color-surface-500': '100 116 139',
		'--color-surface-600': '90 104 125',
		'--color-surface-700': '75 87 104',
		'--color-surface-800': '60 70 83',
		'--color-surface-900': '49 57 68'
	},
	properties_dark: {},
	enhancements: {
		"[data-theme='rocket'] h1,\n[data-theme='rocket'] h2,\n[data-theme='rocket'] h3,\n[data-theme='rocket'] h4,\n[data-theme='rocket'] h5,\n[data-theme='rocket'] h6":
			{ fontWeight: 'bold' },
		"[data-theme='rocket']": {
			backgroundImage:
				'radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),\n\t\t\tradial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%)',
			backgroundAttachment: 'fixed',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		}
	}
} satisfies PresetTheme;

export default rocket;
