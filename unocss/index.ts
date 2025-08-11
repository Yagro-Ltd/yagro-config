import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss';
import presetYagro from './preset/yagro';

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
});
