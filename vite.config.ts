import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  publicDir: false,
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      name: 'MyLilButton',
      fileName: 'my-lil-button',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['preact'],
      output: {
        globals: {
          react: 'preact',
        },
      },
    },
  },
});
