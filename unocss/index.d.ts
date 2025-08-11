import type { Preset } from "unocss";

export interface YagroPresetOptions {
  prefix?: string;
  fonts?: { provider?: "google" | "none" };
  icons?: Record<string, string>;
}

export default function yagroPreset(opts?: YagroPresetOptions): Preset;
