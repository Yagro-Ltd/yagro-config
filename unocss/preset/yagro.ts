import { definePreset } from 'unocss'
import { shortcuts } from './shortcuts'
import { getPreflights } from './preflights'
import { getTheme } from './theme'

export default definePreset(() => {
  const theme = getTheme()
  return {
    name: 'yagro',
    shortcuts,
    preflights: getPreflights({ theme }),
    theme,
  }
})
