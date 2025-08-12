import { definePreset } from 'unocss'
import { shortcuts } from './shortcuts.ts'
import { getPreflights } from './preflights.ts'
import { getTheme } from './theme.ts'

export default definePreset(() => {
  const theme = getTheme()
  return {
    name: 'yagro',
    shortcuts,
    preflights: getPreflights({ theme }),
    theme,
  }
})
