import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        svelte({
            compilerOptions: {
                runes: true
            }
        })
    ],

    build: {
        outDir: '.svelte-kit/web-component',
        emptyOutDir: true,
        cssCodeSplit: false,

        lib: {
            entry: 'src/index.webComponent.js',
            name: 'GoalsTracker',
            formats: ['iife'],
            fileName: 'goals-tracker.js',
            cssFileName: 'goals-tracker'
        }
    }
});