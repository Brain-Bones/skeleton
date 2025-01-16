import fg from 'fast-glob';
import { transformTailwindConfig } from './transformers/transform-tailwind-config.js';
import { transformPackage } from './transformers/transform-package.js';
import type { MigrateOptions } from '../../index.js';
import { isCancel, log, multiselect, spinner } from '@clack/prompts';
import { cli } from '../../../../index.js';
import { extname } from 'node:path';
import { transformSvelte } from './transformers/transform-svelte.js';
import { transformModule } from './transformers/transform-module.js';
import { transformApp } from './transformers/transform-app.js';
import { readFile, writeFile } from 'node:fs/promises';
import { installDependencies } from '../../../../utility/install-dependencies.js';
import { FALLBACK_THEME } from './utility/constants';
import getLatestVersion from 'latest-version';

interface FileMigration {
	path: string;
	content: string;
}

export default async function (options: MigrateOptions) {
	const cwd = options.cwd ?? process.cwd();
	const migrations: FileMigration[] = [];

	// Find all required files
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

	// Validate file existence
	for (const file of [pkg, tailwindConfig, app]) {
		if (file.paths.length === 0) {
			cli.error(`"${file.matcher}" not found in directory "${cwd}".`);
		}
		if (file.paths.length > 1) {
			cli.error(`Multiple "${file.matcher}" entries found in directory: "${cwd}", please ensure there is only one`);
		}
	}

	// Get source folders
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
		cli.error('Migration canceled, nothing written to disk');
		return;
	}

	let theme: string | null = null;

	// Migrate package.json
	const packageSpinner = spinner();
	packageSpinner.start(`Migrating ${pkg.matcher}...`);
	try {
		const pkgCode = await readFile(pkg.paths[0], 'utf-8');
		const skeletonVersion = await getLatestVersion('@skeletonlabs/skeleton', { version: '>=3.0.0-0 <4.0.0' });
		const skeletonSvelteVersion = await getLatestVersion('@skeletonlabs/skeleton-svelte', { version: '>=1.0.0-0 <2.0.0' });
		const transformedPkg = transformPackage(pkgCode, skeletonVersion, skeletonSvelteVersion);
		migrations.push({ path: pkg.paths[0], content: transformedPkg.code });
		packageSpinner.stop(`Successfully prepared ${pkg.matcher} migration!`);
	} catch (e) {
		packageSpinner.stop(`Failed to migrate ${pkg.matcher}: ${e instanceof Error ? e.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled, nothing written to disk');
	}

	// Migrate tailwind config
	const tailwindSpinner = spinner();
	tailwindSpinner.start(`Migrating ${tailwindConfig.matcher}...`);
	try {
		const tailwindCode = await readFile(tailwindConfig.paths[0], 'utf-8');
		const transformedTailwind = transformTailwindConfig(tailwindCode);
		theme = transformedTailwind.meta.themes.preset.at(0) ?? null;
		migrations.push({ path: tailwindConfig.paths[0], content: transformedTailwind.code });
		tailwindSpinner.stop(`Successfully prepared ${tailwindConfig.matcher} migration!`);
	} catch (e) {
		tailwindSpinner.stop(`Failed to migrate ${tailwindConfig.matcher}: ${e instanceof Error ? e.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled, nothing written to disk');
	}

	// Migrate app.html
	const appSpinner = spinner();
	appSpinner.start(`Migrating ${app.matcher}...`);
	try {
		const appCode = await readFile(app.paths[0], 'utf-8');
		const transformedApp = transformApp(appCode, theme ?? FALLBACK_THEME);
		migrations.push({ path: app.paths[0], content: transformedApp.code });
		appSpinner.stop(`Successfully prepared ${app.matcher} migration!`);
	} catch (e) {
		appSpinner.stop(`Failed to migrate ${app.matcher}: ${e instanceof Error ? e.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled, nothing written to disk');
	}

	// Migrate source files
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
			const code = await readFile(sourceFile, 'utf-8');
			if (extension === '.svelte') {
				const transformedSvelte = transformSvelte(code);
				migrations.push({ path: sourceFile, content: transformedSvelte.code });
			} else {
				const transformedModule = transformModule(code);
				migrations.push({ path: sourceFile, content: transformedModule.code });
			}
			sourceFilesSpinner.message(`Successfully prepared ${sourceFile} migration!`);
		} catch (e) {
			sourceFilesSpinner.stop(`Failed to migrate ${sourceFile}: ${e instanceof Error ? e.message : 'Unknown error'}`, 1);
			cli.error('Migration canceled, nothing written to disk');
		}
	}
	sourceFilesSpinner.stop('Successfully prepared all source file migrations!');

	// Write all migrations to disk
	const writeSpinner = spinner();
	writeSpinner.start('Applying all migrations to disk...');
	try {
		await Promise.all(migrations.map(({ path, content }) => writeFile(path, content)));
		writeSpinner.stop('Successfully applied all migrations to disk!');
	} catch (e) {
		writeSpinner.stop(`Failed to apply migrations: ${e instanceof Error ? e.message.replace('\n', ' ') : 'Unknown error'}`, 1);
		cli.error('Migration canceled');
	}

	// Install dependencies
	const installDependenciesSpinner = spinner();
	installDependenciesSpinner.start('Installing dependencies...');
	try {
		await installDependencies(cwd);
		installDependenciesSpinner.stop('Successfully installed dependencies!');
	} catch (e) {
		installDependenciesSpinner.stop(`Failed to install dependencies: ${e instanceof Error ? e.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled');
		return;
	}
	log.info('Migration complete! Visit https://skeleton.dev for more information.');
}
