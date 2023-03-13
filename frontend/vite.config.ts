// import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import alias from '@rollup/plugin-alias';

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), alias()],
  base: '/ipeglin.no',
  resolve: {
    alias: [{ find: '@', replacement: resolve(projectRootDir, 'src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_mixins.scss";
        `,
      },
    },
  },
  optimizeDeps: {
    include: ['lodash.throttle', 'lodash.orderby'],
  },
  build: {
    reportCompressedSize: true,
  },
});
