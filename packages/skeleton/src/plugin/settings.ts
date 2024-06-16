// Common Shared Settings and Constants

export const settings = {
  colorNames: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'],
  colorShades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  colorPairings: [
    { light: 50, dark: 950 },
    { light: 100, dark: 900 },
    { light: 200, dark: 800 },
    { light: 300, dark: 700 },
    { light: 400, dark: 600 },
    // Center uses shade 500
    { light: 950, dark: 50 },
    { light: 900, dark: 100 },
    { light: 800, dark: 200 },
    { light: 700, dark: 300 },
    { light: 600, dark: 400 }
  ]
} as const;

export type TailwindClasses = {
  [className: string]: string | TailwindClasses;
};

export default settings;
