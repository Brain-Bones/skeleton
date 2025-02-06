# Skeleton

This repository contains all the stylesheets for the Skeleton package.

## Installation

```bash
pnpm add @skeletonlabs/skeleton
```

## Usage

1. Import our base stylesheet _after_ the tailwind import:

```css
@import 'tailwindcss';
@import '@skeletonlabs/skeleton'; /* Add Skeleton Stylesheet */
```

2. Import a prebuild or custom theme _after_ the base skeleton import:

```css
@import 'tailwindcss';
@import '@skeletonlabs/skeleton';
@import '@skeletonlabs/skeleton/themes/cerberus'; /* Add Skeleton Theme */
```

3. Set your imported theme in your HTML root:

```html
<html data-theme="cerberus">
	<!-- Add Skeleton Theme -->
	<!-- ... -->
</html>
```

4. Enjoy Skeleton! Visit [the documentation](https://next.skeleton.dev/) for any questions.

## Project Setup

This project uses [Vite](https://vite.dev/) as the build tool. To author our CSS stylesheets in an efficient way we utilize [Sass](https://sass-lang.com/) for handling things like loops and shared variables. This is merely a build tool so we will never author actual Sass, we're a Tailwind library after all.

## Project Structure

```
src/
├── base/       # Core styles, color definitions, and base configurations
├── components/ # Component-specific classes
├── internal/   # Internal utilities, constants, and shared resources
├── themes/     # All official Skeleton themes
├── utilities/  # Tailwind utilities
└── variants/   # Tailwind variants
```

## License

This project is licensed under the MIT license.
