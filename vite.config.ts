import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      entry: '/unocss/preset/yagro.ts',
      fileName: 'preset-yagro',
      formats: ['es'],
      name: 'YagroUnoCssPreset',
    },
    rollupOptions: {
      external: ['unocss', 'vue'],
      output: {
        globals: {
          unocss: 'UnoCSS',
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    UnoCSS(),
  ],
});
