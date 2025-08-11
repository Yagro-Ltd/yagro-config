import type { Preset } from "unocss";
import { presetUno, presetIcons, presetWebFonts } from "unocss";

export interface YagroPresetOptions {
  prefix?: string;
  fonts?: { provider?: "google" | "none" };
  icons?: Record<string, string>;
}

export default function yagroPreset(opts: YagroPresetOptions = {}): Preset {
  const {
    prefix = "ÿ-",
    fonts = { provider: "google" },
    icons = {},
  } = opts;

  return {
    name: "@yagro-ltd/config/unocss",
    presets: [
      presetUno(),
      presetIcons({ collections: { custom: icons } }),
      ...(fonts.provider === "google"
        ? [presetWebFonts({
            provider: "google",
            fonts: {
              montserrat: [
                { name: "Montserrat", weights: ["400", "600", "700"], italic: true },
              ],
            },
          })]
        : []),
    ],
    shortcuts: {
      [`${prefix}transition-fade-in`]:
        `${prefix}transition-all ${prefix}duration-100 ${prefix}ease-out ` +
        `${prefix}transform ${prefix}opacity-0 ${prefix}animate-fade-in ${prefix}animate-fill-forwards`,
      [`${prefix}center-screen`]: `${prefix}mx-auto ${prefix}my-auto ${prefix}absolute ${prefix}inset-0 ${prefix}h-fit`,
      [`${prefix}card`]: `${prefix}rounded-[8px] ${prefix}bg-white ${prefix}shadow-sm ${prefix}p-24px ${prefix}mb-8`,
      [`${prefix}fullscreen`]: `${prefix}absolute ${prefix}inset-0 ${prefix}z-0 ${prefix}w-full`,
    },
    theme: {
      breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
    },
  };
}