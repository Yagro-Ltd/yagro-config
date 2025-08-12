import { definePreset, presetIcons, presetUno, presetWebFonts, type Preflight } from 'unocss'
import { shortcuts } from './shortcuts'
import { getPreflights } from './preflights'
import { getSafelist } from './safelist'
import { getPresets } from './presets'
import { getTheme } from './theme'

export type Options = {
  prefix?: string
  fonts?: { provider?: 'google' | 'none' }
  icons?: Record<string, string>
}

export default definePreset<Options>((options = {}) => {
  const theme = getTheme();

  return {
    name: 'yagro',
    theme,
    preflights: getPreflights({ theme }) as Preflight[],
    shortcuts,
    presets: getPresets({
      prefix: options.prefix ?? '',
      icons: options.icons ?? {},
      fonts: { provider: 'google' }
    }),
    safelist: [getSafelist(options)],
  }
})
