const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, './index.js'),
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015'],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
	plugins: [new CleanWebpackPlugin()],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		port: 8080,
	},
};
