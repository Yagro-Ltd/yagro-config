import { definePreset, presetIcons, presetUno, presetWebFonts, type Preflight } from 'unocss'
import { shortcuts } from './shortcuts'
import { getPreflights } from './preflights'
import { getTheme } from './theme'

export type Options = {
  prefix?: string
  fonts?: { provider?: 'google' | 'none' }
  icons?: Record<string, string>
}

export default definePreset<Options>((opts = {}) => {
  const { prefix = 'ÿ-', fonts = { provider: 'google' }, icons = {} } = opts
  const theme = getTheme()

  return {
    name: 'yagro',
    theme,
    preflights: getPreflights({ theme }) as Preflight[],
    shortcuts,
    presets: [
      presetUno({ prefix }),
      presetIcons({ collections: { custom: icons } }),
      ...(fonts.provider === 'google'
        ? [
            presetWebFonts({
              provider: 'google',
              fonts: {
                montserrat: [{ name: 'Montserrat', weights: ['400', '600', '700'], italic: true }],
              },
            }),
          ]
        : []),
    ],
    safelist: buildSafelist(prefix),
  }
})

function buildSafelist(prefix = ''): string[] {
  const p = (c: string) => `${prefix}${c}`

  const gaps = (bp?: 'sm' | 'md' | 'lg' | 'xl') =>
    Array.from({ length: 16 }, (_, i) => `${bp ? `${bp}:` : ''}${p(`gap-${i + 1}`)}`)

  const my = (bp?: 'sm') =>
    Array.from({ length: 16 }, (_, i) => `${bp ? `${bp}:` : ''}${p(`my-${i + 2}`)}`)

  const cols = (bp?: 'sm' | 'md' | 'lg' | 'xl') =>
    Array.from({ length: 12 }, (_, i) => `${bp ? `${bp}:` : ''}${p(`grid-cols-${i + 1}`)}`)

  const span = (bp?: 'sm' | 'md' | 'lg' | 'xl') =>
    Array.from({ length: 12 }, (_, i) => `${bp ? `${bp}:` : ''}${p(`col-span-${i + 1}`)}`)

  return [
    p('items-start'),
    p('items-center'),
    p('items-end'),
    p('items-stretch'),
    p('items-baseline'),
    ...gaps(),
    ...gaps('sm'),
    ...gaps('md'),
    ...gaps('lg'),
    ...gaps('xl'),
    ...my(),
    ...my('sm'),
    ...cols(),
    ...cols('sm'),
    ...cols('md'),
    ...cols('lg'),
    ...cols('xl'),
    ...span(),
    ...span('sm'),
    ...span('md'),
    ...span('lg'),
    ...span('xl'),
  ]
}