const path = require('node:path');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;

module.exports = {
	entry: {},
	output: {
		path: path.resolve(__dirname, 'dist/federation'),
		publicPath: 'auto',
		uniqueName: 'goals_tracker',
		clean: true
	},
	resolve: {
		extensions: ['.js', '.ts', '.svelte'],
		alias: { '#lib': path.resolve(__dirname, 'src/lib') },
		conditionNames: ['svelte', 'browser', 'import', '...']
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: { emitCss: false, compilerOptions: { runes: true, css: 'injected' } }
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'import.meta.env.VITE_GOALS_API_URL': JSON.stringify(
				process.env.VITE_GOALS_API_URL || 'http://localhost:7001'
			)
		}),
		new ModuleFederationPlugin({
			name: 'goals_tracker',
			filename: 'remoteEntry.js',
			exposes: { './mount': './src/federation/mount.js' },
			shared: {}
		})
	],
	devServer: {
		port: 5000,
		host: '0.0.0.0',
		headers: { 'Access-Control-Allow-Origin': '*' },
		allowedHosts: ['localhost', '127.0.0.1'],
		hot: false,
		liveReload: false,
		client: false
	}
};
