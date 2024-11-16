import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: [
		"dist/**",
		"build/**",
		".next/**",
		"eslint.config.mjs",
		"postcss.config.js",
		"next.config.mjs",
		"lint-staged.config.mjs",
	],
	react: {
		nextjs: true,
	},
	tailwindcss: true,
	perfectionist: false,
	typescript: {
		tsconfigPath: "tsconfig.json",
	},
});