'use strict';

import webpack from 'webpack';

module.exports = {
	context: __dirname + 'src',
	// 入口
	entry: {
		app: './app.js'
	},
	// 输出
	output: {
		path: __dirname + 'dist',
		filename: '[name].bundle.js',
		publicPath: "/assets"
	},
	dexServer: {
		contentBase: __dirname + '/src'
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},
	// 分离css
	plugins: [
    new ExtractTextPlugin({
      filename: "[name].bundle.css",
      allChunks: true,
    }),
  ],
}
