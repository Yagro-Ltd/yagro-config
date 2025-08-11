import { defineConfig } from 'unocss';
import yagroPreset from '@yagro/config-unocss';

// import raw icon data from svg file
import { readFileSync } from 'fs';
import { join } from 'path';

// Loads Custom SVGs for us to use in the config below.
function loadIcon(name: string) {
  return readFileSync(join(__dirname, 'assets/svg/', `icon-${name}.svg`), 'utf-8');
}

const config = defineConfig({
  presets: [
    yagroPreset({
      // To avoid conflicts with Bootstrap.
      prefix: 'ÿ-',
      // This passes an option to our config to disable the font provider.
      fonts: {
        provider: 'none',
      },
      // This passes custom icons down to our config. eg. 'i-custom:flask?mask'.
      icons: {
        flask: loadIcon('flask'),
        spray: loadIcon('spray'),
      },
    }),
  ],
  shortcuts: {
    'ÿ-transition-fade-in':
      'ÿ-transition-all ÿ-duration-100 ÿ-ease-out ÿ-transform ÿ-opacity-0 ÿ-animate-fade-in ÿ-animate-fill-forwards',
    'ÿ-center-screen': 'ÿ-mx-auto ÿ-my-auto ÿ-absolute ÿ-inset-0 ÿ-h-fit',
    'ÿ-card': 'ÿ-rounded-[8px] ÿ-bg-white ÿ-shadow-sm ÿ-p-24px ÿ-mb-8',
    'ÿ-fullscreen': 'ÿ-absolute ÿ-inset-0 ÿ-z-0 ÿ-w-full',
  },
  theme: {
    /* Matches Bootstrap for compatibility */
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
});

export default config;
