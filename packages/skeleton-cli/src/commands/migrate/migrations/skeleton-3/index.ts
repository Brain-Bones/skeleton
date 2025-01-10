import { cancel, intro, outro } from '@clack/prompts';
import fg from 'fast-glob';
import { transformTailwindConfig } from './transform-tailwind-config.js';
import { transformPackage } from './transform-package.js';

export default async function (cwd = process.cwd()) {
	intro('Starting the `skeleton-3` migration...');

	/**
	 * Ensure the required files exist.
	 */
	const pkg = {
		matcher: 'package.json',
		paths: await fg('package.json', { cwd })
	};
	const tailwindConfig = {
		matcher: 'tailwind.config.{js,mjs,ts,mts}',
		paths: await fg('tailwind.config.{js,mjs,ts,mts}', { cwd })
	};
	for (const file of [pkg, tailwindConfig]) {
		if (file.paths.length === 0) {
			cancel(`"${file.matcher}" not found in "${cwd}", please change directory into your project root or provide the "cwd" argument.`);
			process.exit(1);
		}
		if (file.paths.length > 1) {
			cancel(`Multiple "${file.matcher}" files found in "${cwd}", please ensure there is only one.`);
			process.exit(1);
		}
	}

	/**
	 * Run migrations
	 */
	await transformPackage(pkg.paths[0]);
	await transformTailwindConfig(tailwindConfig.paths[0]);
	// TODO: Transform svelte components (.svelte)
	// TODO: Transform modules (.ts/.js)

	outro('The `skeleton-3` migration has been completed.');
}
