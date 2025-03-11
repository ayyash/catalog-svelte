import routify from '@roxi/routify/vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';


const production = process.env.NODE_ENV === 'production';
// const apiUrl = import.meta.env.VITE_API_URL;

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            compilerOptions: {
                // runes: true // Enable runes mode
                dev: !production
            },
        }),
        routify(),
    ],
    server: {
        port: 5200
    }
});
