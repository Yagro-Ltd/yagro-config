import { definePreset } from 'unocss'
import { shortcuts } from './shortcuts'
import { getPreflights } from './preflights'
import { getTheme } from './theme'

export interface YagroPresetOptions {
  prefix?: string
}

export default definePreset<YagroPresetOptions>((options = {}) => {
  const { prefix = 'ÿ-' } = options
  const theme = getTheme()
  return {
    name: 'yagro',
    prefix,
    shortcuts,
    preflights: getPreflights({ theme }),
    theme,
  }
})
