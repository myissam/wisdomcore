import adapter from '@sveltejs/adapter-static';
//import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
      preprocess: [vitePreprocess()],
                            build: {
                                outDir: 'dist',
                            rollupOptions: {
                                input: {
                                    main: path.resolve(__dirname, 'index.html')
                                }
                            }
                            },
                            assetsInclude: ['**/*.xml']
});
