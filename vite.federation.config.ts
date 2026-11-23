import { fileURLToPath } from 'node:url';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: [
			{ find: /^#lib(?=\/|$)/, replacement: fileURLToPath(new URL('./src/lib', import.meta.url)) }
		]
	},
	server: {
		port: 5000,
		strictPort: true,
		origin: 'http://localhost:5000',
		cors: { origin: /^http:\/\/(localhost|127\.0\.0\.1):(4201|3001)$/ }
	},
	preview: { port: 5000, strictPort: true, cors: true },
	plugins: [
		svelte({ emitCss: false, compilerOptions: { runes: true } }),
		federation({
			name: 'goals_tracker',
			filename: 'remoteEntry.js',
			dts: false,
			exposes: { './mount': './src/federation/mount.ts' },
			shared: {}
		})
	],
	build: {
		outDir: 'dist/federation',
		target: 'es2022',
		rollupOptions: { input: 'federation.html' }
	}
});
