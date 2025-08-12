import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
  ],
  build: {
    lib: {
      entry: '/unocss/preset/yagro.ts',
      name: 'YagroUnoCssPreset',
      fileName: 'preset-yagro',
      formats: ['es'],
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
})
