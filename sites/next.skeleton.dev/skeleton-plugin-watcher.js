// @ts-check
import { Minimatch } from "minimatch";
import { exec } from "node:child_process";
import { join, resolve, basename } from "node:path";

const COLORS = {
	red: "\x1b[31m",
	green: "\x1b[32m",
	cyan: "\x1b[36m",
};

/**
 * @param {keyof COLORS} color
 * @returns {string}
 */
function color(color) {
	const RESET = "\x1b[0m";
	return `${COLORS[color]}%s${RESET}`;
}

const log = {
	/**
	 * @param {keyof COLORS} c
	 * @param {string} str
	 */
	info(str, c) {
		const prefix = "[TW Plugin]: ";
		console.log(color(c), prefix + str);
	},
	/**
	 * @param {string} str
	 */
	error(str) {
		console.error(color("red"), str);
	},
};

/**
 * @returns {NonNullable<import('astro').ViteUserConfig['plugins']>[number]}
 */
export default function skeletonPluginWatcher() {
	const pluginSrcPath = resolve(
		".",
		join("..", "..", "packages", "skeleton", "src", "plugin")
	);
	const mm = new Minimatch("**/packages/skeleton/src/plugin/**/*");
	let locked = false;

	return {
		name: "skeleton-plugin-watcher",
		configureServer(vite) {
			vite.watcher.add(pluginSrcPath);
			vite.watcher.on("all", async (event, path) => {
				if (mm.match(path) && !path.includes("generated")) {
					log.info(`File Updated: ${basename(path)}`, "cyan");
					if (!locked) {
						locked = true;
						const now = Date.now();
						exec(
							"pnpm -F @skeletonlabs/skeleton build",
							(err, stdout, stderr) => {
								if (err) log.error(stderr);
								else log.info(`Completed in ${Date.now() - now}ms`, "green");
								locked = false;
							}
						);
					}
				}
			});
		},
		async buildStart() {
			const now = Date.now();
			exec("pnpm -F @skeletonlabs/skeleton build", (err, stdout, stderr) => {
				if (err) log.error(stderr);
				else log.info(`Completed in ${Date.now() - now}ms`, "green");
			});
		},
	};
}
