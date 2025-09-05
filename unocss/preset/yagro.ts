import { definePreset, type Preflight, presetIcons, presetUno, presetWebFonts } from 'unocss';

import { getPreflights } from './preflights';
import { getPresets } from './presets';
import { getSafelist } from './safelist';
import { shortcuts } from './shortcuts';
import { getTheme } from './theme';

export type Options = {
  prefix?: string
  fonts?: { provider?: 'google' | 'none' }
  icons?: Record<string, string>
}

export default definePreset<Options>((options = {}) => {
  const theme = getTheme();

  return {
    name: 'yagro',
    preflights: getPreflights({ theme }) as Preflight[],
    presets: getPresets({
      fonts: { provider: 'google' },
      icons: options.icons ?? {},
      prefix: options.prefix ?? ''
    }),
    safelist: [getSafelist(options)],
    shortcuts,
    theme,
  };
});
