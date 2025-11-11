import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), mockDevServerPlugin()],
    server: {
        proxy: {
            '^/api': 'http://example.com/',
        },
    },
});
