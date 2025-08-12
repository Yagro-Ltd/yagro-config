import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'
import presetYagro from './unocss/preset/yagro.ts'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        montserrat: [
          {
            name: 'Montserrat',
            weights: ['400', '600', '700'],
            italic: true,
          },
        ],
      },
    }),
    presetYagro(),
  ],
})
