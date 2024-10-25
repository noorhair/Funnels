import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { ViteMinifyPlugin } from "vite-plugin-minify";
export default defineConfig({
	plugins: [react(), ViteMinifyPlugin({})],
	base: "/super-serum-trial",
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "./src") },

			{ find: "@fonts", replacement: path.resolve(__dirname, "./src/assets/fonts") },
			{ find: "@icons", replacement: path.resolve(__dirname, "./src/assets/icons/index.ts") },
			{ find: "@images", replacement: path.resolve(__dirname, "./src/assets/images") },

			{ find: "@logic", replacement: path.resolve(__dirname, "./src/logic") },
			{ find: "@sharedUI", replacement: path.resolve(__dirname, "./src/ui/shared/index.ts") },
			{ find: "@pagesUI", replacement: path.resolve(__dirname, "./src/ui/pages") },
			{ find: "@appTypes", replacement: path.resolve(__dirname, "./src/types") },
			{ find: "@pages", replacement: path.resolve(__dirname, "./src/pages/index.ts") },

			{ find: "@mixins", replacement: path.resolve(__dirname, "./src/styles/mixins.scss") },
			{ find: "@animations", replacement: path.resolve(__dirname, "./src/styles/animations.scss") },
			{ find: "@sassConstants", replacement: path.resolve(__dirname, "./src/styles/constants.scss") },
		],
	},
});
