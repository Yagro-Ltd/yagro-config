import { presetIcons, presetUno, presetWebFonts,  } from 'unocss'

export function getPresets (options = {
  prefix: '',
  icons: {},
  fonts: {
    provider: 'google' as const
  }
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
      provider: options.fonts.provider,
      fonts: {
        montserrat: [
          {
            name: 'Montserrat',
            weights: ['200', '400', '700'],
            italic: true
          }
        ]
      }
    })
  ]
}
