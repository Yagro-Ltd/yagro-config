import { presetIcons, presetUno, presetWebFonts, } from 'unocss';

export function getPresets(options = {
  fonts: {
    provider: 'google' as const
  },
  icons: {},
  prefix: ''
}) {
  return [
    presetUno(
      {
        prefix: options.prefix
      }
    ),
    presetIcons(
      {
        collections: {
          custom: options.icons
        }
      }
    ),
    presetWebFonts({
      fonts: {
        montserrat: [
          {
            italic: true,
            name: 'Montserrat',
            weights: ['200', '400', '700']
          }
        ]
      },
      provider: options.fonts.provider
    })
  ];
}
