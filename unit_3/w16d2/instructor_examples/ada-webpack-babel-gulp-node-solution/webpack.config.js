// Built in path module from NodeJS allows us to get the path of a file or directory and other useful functions
const path = require('path');
// This plugin helps us inject our built scripts into a HTML page
const HtmlWebpackPlugin = require('html-webpack-plugin');
// For creating a hash
const WebpackMd5Hash = require('webpack-md5-hash');
// For Minification of files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// allows us to empty the build folder before building new assets
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = env => {
	return {
		entry: {
			App: './assets/js/components/App.js',
			main: './assets/js/main.js'
		},
		output: {
			path: path.resolve(__dirname, 'public/js/dist'),
			filename: '[name].[chunkhash].js' // '[name].[chunkhash].js' put this if you want to get hashed files to cache bust
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader', 'prettier-loader']
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
						'postcss-loader'
					]
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin('public/js/dist', {}),
			new MiniCssExtractPlugin({
				filename: 'style.[contenthash].css' // 'style.[contenthash].css' put this if you want to get hashed files to cache bust
			}),
			new HtmlWebpackPlugin({
				inject: true,
				hash: true,
				template: './assets/index.html',
				children: false,
				filename: '../../index.html'
			}),
			new WebpackMd5Hash()
		],
		optimization: {
			splitChunks: {
				chunks: 'all',
				minSize: 0
			},
			usedExports: true,
			sideEffects: true
		}
	};
};
