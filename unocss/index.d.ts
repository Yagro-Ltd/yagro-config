import type { Preset } from 'unocss';

export interface YagroPresetOptions {
  prefix?: string;
  fonts?: { provider?: 'google' | 'none' };
  icons?: Record<string, string>;
}

declare function yagroPreset(options?: YagroPresetOptions): Preset<any>;

export default yagroPreset;
