import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';

/**
 *  @type {import('vite').UserConfig)
 */
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    clearScreen: 'false',
    base: '/',
    build: {
      target: browserslistToEsbuild(),
    },
    preview: {
      port: 8080,
    },
    css: {
      devSourcemap: true,
    },
    server: {
      open: false,
      port: 3000,
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    plugins: [react()],
  };
});
