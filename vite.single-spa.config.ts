import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: { '#lib': fileURLToPath(new URL('./src/lib', import.meta.url)) }
	},
	build: {
		outDir: 'dist/single-spa',
		emptyOutDir: true,
		cssCodeSplit: false,
		lib: {
			entry: 'src/single-spa.ts',
			formats: ['es'],
			fileName: () => 'single-spa.js',
			cssFileName: 'single-spa'
		}
	}
});
