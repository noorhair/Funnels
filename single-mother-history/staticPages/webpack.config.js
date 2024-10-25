import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { fileURLToPath } from 'url';
import HtmlMinimizerPlugin from "html-minimizer-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	entry: "./index.js",
	mode: "production",
	output: {
		path: path.resolve(__dirname, './dist'),
	},
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css",
		}),
		new CopyPlugin({
			patterns: [
				{
					context: path.resolve(__dirname, ""),
					from: "./index.html",
				},
				{
					context: path.resolve(__dirname, ""),
					from: "./script.js",
				},
				{
					context: path.resolve(__dirname, ""),
					from: "./img",
					to: "./img"
				},
			],
		})
	],
	optimization: {
		minimize: true,
		minimizer: [
			new HtmlMinimizerPlugin(),
			new CssMinimizerPlugin(),
			new TerserPlugin({
				minify: TerserPlugin.uglifyJsMinify,
				terserOptions: {
					toplevel: true,
					compress: {
						global_defs: {
							"@console.log": "alert"
						},
						passes: 2
					},
					output: {
						beautify: false,
						preamble: "/* uglified */"
					}
				},
			}),
		],
	},
};
