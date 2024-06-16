// import type { Theme } from '../index.js';

const goldNouveau = {
  name: 'gold-nouveau',
  properties: {
    '--theme-font-family-base': 'system-ui, sans-serif',
    '--theme-font-family-heading': "'Quicksand', sans-serif",
    '--theme-font-color-base': 'var(--color-surface-900)',
    '--theme-font-color-dark': 'var(--color-surface-50)',
    '--theme-rounded-base': '4px',
    '--theme-rounded-container': '4px',
    '--theme-border-base': '1px',
    '--on-primary': '255 255 255',
    '--on-secondary': '255 255 255',
    '--on-tertiary': '255 255 255',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    '--color-primary-50': '250 248 252',
    '--color-primary-100': '242 238 247',
    '--color-primary-200': '229 220 239',
    '--color-primary-300': '209 192 226',
    '--color-primary-400': '162 129 197',
    '--color-primary-500': '116 74 161',
    '--color-primary-600': '83 53 115',
    '--color-primary-700': '60 39 84',
    '--color-primary-800': '35 22 49',
    '--color-primary-900': '18 11 24',
    '--color-secondary-50': '218 234 251',
    '--color-secondary-100': '205 227 250',
    '--color-secondary-200': '193 220 249',
    '--color-secondary-300': '155 199 245',
    '--color-secondary-400': '81 156 237',
    '--color-secondary-500': '6 114 229',
    '--color-secondary-600': '5 103 206',
    '--color-secondary-700': '5 86 172',
    '--color-secondary-800': '4 68 137',
    '--color-secondary-900': '3 56 112',
    '--color-tertiary-50': '236 235 250',
    '--color-tertiary-100': '229 228 248',
    '--color-tertiary-200': '223 221 247',
    '--color-tertiary-300': '204 201 241',
    '--color-tertiary-400': '165 161 231',
    '--color-tertiary-500': '127 120 221',
    '--color-tertiary-600': '114 108 199',
    '--color-tertiary-700': '95 90 166',
    '--color-tertiary-800': '76 72 133',
    '--color-tertiary-900': '62 59 108',
    '--color-success-50': '234 246 237',
    '--color-success-100': '227 243 231',
    '--color-success-200': '220 241 225',
    '--color-success-300': '199 232 206',
    '--color-success-400': '156 214 170',
    '--color-success-500': '114 197 133',
    '--color-success-600': '103 177 120',
    '--color-success-700': '86 148 100',
    '--color-success-800': '68 118 80',
    '--color-success-900': '56 97 65',
    '--color-warning-50': '251 236 218',
    '--color-warning-100': '250 229 206',
    '--color-warning-200': '249 223 193',
    '--color-warning-300': '245 204 156',
    '--color-warning-400': '238 165 82',
    '--color-warning-500': '231 127 8',
    '--color-warning-600': '208 114 7',
    '--color-warning-700': '173 95 6',
    '--color-warning-800': '139 76 5',
    '--color-warning-900': '113 62 4',
    '--color-error-50': '238 219 222',
    '--color-error-100': '233 207 211',
    '--color-error-200': '227 195 200',
    '--color-error-300': '210 159 167',
    '--color-error-400': '177 87 100',
    '--color-error-500': '143 15 34',
    '--color-error-600': '129 14 31',
    '--color-error-700': '107 11 26',
    '--color-error-800': '86 9 20',
    '--color-error-900': '70 7 17',
    '--color-surface-50': '250 248 252',
    '--color-surface-100': '242 238 247',
    '--color-surface-200': '229 220 239',
    '--color-surface-300': '209 192 226',
    '--color-surface-400': '162 129 197',
    '--color-surface-500': '116 74 161',
    '--color-surface-600': '83 53 115',
    '--color-surface-700': '60 39 84',
    '--color-surface-800': '35 22 49',
    '--color-surface-900': '18 11 24'
  },
  properties_dark: {
    '--on-primary': '0 0 0',
    '--color-primary-50': '251 247 224',
    '--color-primary-100': '250 244 214',
    '--color-primary-200': '249 241 204',
    '--color-primary-300': '245 233 173',
    '--color-primary-400': '238 217 112',
    '--color-primary-500': '230 200 51',
    '--color-primary-600': '207 180 46',
    '--color-primary-700': '173 150 38',
    '--color-primary-800': '138 120 31',
    '--color-primary-900': '113 98 25'
  },
  enhancements: {
    "[data-theme='gold-nouveau'] h1,\n[data-theme='gold-nouveau'] h2,\n[data-theme='gold-nouveau'] h3,\n[data-theme='gold-nouveau'] h4,\n[data-theme='gold-nouveau'] h5,\n[data-theme='gold-nouveau'] h6":
      { fontWeight: 'bold' },
    "[data-theme='gold-nouveau']": {
      backgroundImage:
        'radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),\n\t\tradial-gradient(at 98% 100%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%)',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }
}; // satisfies Theme;

export default goldNouveau;
