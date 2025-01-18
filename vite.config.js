import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { imagetools } from 'vite-imagetools';

/**
 *  @type {import('vite').UserConfig}
 */
// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  base: '/',
  build: {
    target: browserslistToEsbuild(),
    assetsInlineLimit: 6144,
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
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [
    react(),
    imagetools({
      exclude: 'public/**/*',
    }),
  ],
});
