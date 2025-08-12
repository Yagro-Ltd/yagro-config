import { definePreset, presetIcons, presetUno, presetWebFonts } from 'unocss';
import { shortcuts } from './preset/shortcuts';
import { getPreflights } from './preset/preflights';
import { getTheme } from './preset/theme';

export interface YagroPresetOptions {
  prefix?: string;
  fonts?: { provider?: 'google' | 'none' };
  icons?: Record<string, string>;
}

export default definePreset<YagroPresetOptions>((options = {}) => {
  const { prefix = 'ÿ-', fonts = { provider: 'google' }, icons = {} } = options;

  const theme = getTheme();

  return {
    name: 'yagro',
    prefix,
    presets: [
      presetUno(),
      presetIcons({ collections: { custom: icons } }),
      ...(fonts.provider === 'google'
        ? [
            presetWebFonts({
              provider: 'google',
              fonts: {
                montserrat: [
                  { name: 'Montserrat', weights: ['400', '600', '700'], italic: true },
                ],
              },
            }),
          ]
        : []),
    ],
    shortcuts,
    preflights: getPreflights({ theme }),
    theme,
  };
});
