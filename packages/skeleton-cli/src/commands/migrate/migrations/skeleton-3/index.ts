import fg from 'fast-glob';
import { transformTailwindConfig } from './transformers/transform-tailwind-config.js';
import { transformPackage } from './transformers/transform-package.js';
import type { MigrateOptions } from '../../index.js';
import { isCancel, multiselect, spinner } from '@clack/prompts';
import { cli } from '../../../../index.js';
import { extname } from 'node:path';
import { transformSvelte } from './transformers/transform-svelte.js';
import { transformModule } from './transformers/transform-module.js';
import { transformApp } from './transformers/transform-app.js';
import { readFile, writeFile } from 'node:fs/promises';
import { installDependencies } from '../../../../utility/install-dependencies.js';
import { FALLBACK_THEME } from './utility/constants';
import getLatestVersion from 'latest-version';

export default async function (options: MigrateOptions) {
	const cwd = options.cwd ?? process.cwd();

	const pkg = {
		matcher: 'package.json',
		paths: await fg('package.json', { cwd })
	};
	const tailwindConfig = {
		matcher: 'tailwind.config.{js,mjs,ts,mts}',
		paths: await fg('tailwind.config.{js,mjs,ts,mts}', { cwd })
	};
	const app = {
		matcher: 'src/app.html',
		paths: await fg('src/app.html', { cwd })
	};

	for (const file of [pkg, tailwindConfig, app]) {
		if (file.paths.length === 0) {
			cli.error(`"${file.matcher}" not found in directory "${cwd}".`);
		}
		if (file.paths.length > 1) {
			cli.error(`Multiple "${file.matcher}" entries found in directory: "${cwd}", please ensure there is only one`);
		}
	}

	const availableSourceFolders = await fg('*', {
		cwd: cwd,
		onlyDirectories: true,
		ignore: ['node_modules']
	});
	const sourceFolders = await multiselect({
		message: 'What folders contain usage of Skeleton? (classes, imports, etc.)',
		options: availableSourceFolders.map((folder) => ({ label: folder, value: folder })),
		initialValues: availableSourceFolders
	});

	if (isCancel(sourceFolders)) {
		cli.error('Migration cancelled by user.');
		return;
	}

	const packageSpinner = spinner();
	packageSpinner.start(`Migrating ${pkg.matcher}...`);
	try {
		const pkgCode = await readFile(pkg.paths[0], 'utf-8');
		const skeletonVersion = await getLatestVersion('@skeletonlabs/skeleton', { version: '>=3.0.0-0 <4.0.0' });
		const skeletonSvelteVersion = await getLatestVersion('@skeletonlabs/skeleton-svelte', { version: '>=1.0.0-0 <2.0.0' });
		const transformedPkg = transformPackage(pkgCode, skeletonVersion, skeletonSvelteVersion);
		await writeFile(pkg.paths[0], transformedPkg.code);
		packageSpinner.stop(`Successfully migrated ${pkg.matcher}`);
	} catch (e) {
		if (e instanceof Error) {
			packageSpinner.stop(`Failed to migrate ${pkg.matcher}: ${e.message}`, 1);
		} else {
			packageSpinner.stop(`Failed to migrate ${pkg.matcher}`, 1);
		}
		cli.error('Cancelled migration due to error');
	}

	let theme: string | null = null;

	const tailwindSpinner = spinner();
	tailwindSpinner.start(`Migrating ${tailwindConfig.matcher}...`);
	try {
		const tailwindCode = await readFile(tailwindConfig.paths[0], 'utf-8');
		const transformedTailwind = transformTailwindConfig(tailwindCode);
		theme = transformedTailwind.meta.themes.preset.at(0) ?? null;
		await writeFile(tailwindConfig.paths[0], transformedTailwind.code);
		tailwindSpinner.stop(`Successfully migrated ${tailwindConfig.matcher}`);
	} catch (e) {
		if (e instanceof Error) {
			tailwindSpinner.stop(`Failed to migrate ${tailwindConfig.matcher}: ${e.message}`, 1);
		} else {
			tailwindSpinner.stop(`Failed to migrate ${tailwindConfig.matcher}`, 1);
		}
		cli.error('Cancelled migration due to error');
	}

	const appSpinner = spinner();
	appSpinner.start(`Migrating ${app.matcher}...`);
	try {
		const appCode = await readFile(app.paths[0], 'utf-8');
		const transformedApp = transformApp(appCode, theme ?? FALLBACK_THEME);
		await writeFile(app.paths[0], transformedApp.code);
		appSpinner.stop(`Successfully migrated ${app.matcher}`);
	} catch (e) {
		if (e instanceof Error) {
			appSpinner.stop(`Failed to migrate ${app.matcher}: ${e.message}`, 1);
		} else {
			appSpinner.stop(`Failed to migrate ${app.matcher}`, 1);
		}
		cli.error('Cancelled migration due to error');
	}

	const sourceFileMatcher = `{${sourceFolders.join(',')}}/**/*.{js,mjs,ts,mts,svelte}`;
	const sourceFiles = await fg(sourceFileMatcher, {
		cwd: cwd,
		ignore: ['node_modules']
	});

	const sourceFilesSpinner = spinner();
	sourceFilesSpinner.start(`Migrating source files...`);
	for (const sourceFile of sourceFiles) {
		sourceFilesSpinner.message(`Migrating ${sourceFile}...`);
		const extension = extname(sourceFile);
		try {
			if (extension === '.svelte') {
				const svelteCode = await readFile(sourceFile, 'utf-8');
				const transformedSvelte = transformSvelte(svelteCode);
				await writeFile(sourceFile, transformedSvelte.code);
			} else {
				const moduleCode = await readFile(sourceFile, 'utf-8');
				const transformedModule = transformModule(moduleCode);
				await writeFile(sourceFile, transformedModule.code);
			}
			sourceFilesSpinner.message(`Successfully migrated ${sourceFile}`);
		} catch (e) {
			if (e instanceof Error) {
				sourceFilesSpinner.stop(`Failed to migrate ${sourceFile}: ${e.message}`, 1);
			} else {
				sourceFilesSpinner.stop(`Failed to migrate ${sourceFile}`, 1);
			}
			cli.error('Cancelled migration due to error');
		}
	}
	sourceFilesSpinner.stop('Successfully migrated all source files');

	const installDependenciesSpinner = spinner();
	installDependenciesSpinner.start('Installing dependencies...');
	try {
		await installDependencies(cwd);
		installDependenciesSpinner.stop('Successfully installed dependencies');
	} catch (e) {
		if (e instanceof Error) {
			installDependenciesSpinner.stop(`Failed to install dependencies: ${e.message}`);
		} else {
			installDependenciesSpinner.stop('Failed to install dependencies', 1);
		}
		cli.error('Cancelled migration due to error');
		
	}
}
