declare module '@yagro-ltd/config/unocss' {
  import type { Preset } from 'unocss'

  export type Options = {
    prefix?: string
    fonts?: { provider?: 'google' | 'none' }
    icons?: Record<string, string>
  }

  const preset: (opts?: Options) => Preset
  export default preset
}