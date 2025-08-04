import { defineConfig, presetIcons, presetWebFonts } from 'unocss';

import { presetWind3 } from '@unocss/preset-wind3';

export default defineConfig({
  content: {
    pipeline: {
      include: ['src/**/*.{vue,ts}', /(.*\/)yagro-ui(.*)\.(js)$/],
    },
  },

  /* Used for global CSS */
  preflights: [
    {
      getCSS: ({ theme }) => `
      :root {
        
        /*
        Used for the space above and below the section.
        Usually margin, but switch to padding if used on a section with background color.
        */
        --section-spacing-sm: 1rem;
        --section-spacing-md: 1.5rem;
        --section-spacing-lg: 3rem;
        --section-spacing-xl: 6rem;
      }

      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        font-family: ${theme.fonts.primary};
        color: ${theme.colors.typography.text};
      }
      
      body {
        margin: 0;
        min-height: 100vh;
      }

      img, svg, i {
        display: block;
      }

      button {
        appearance: none;
        border: none;
        background: none;
        cursor: pointer;
        margin: 0;
        padding: 0;
      }

      ::-webkit-input-placeholder {
        font-size: 14px;
        color: inherit;
        opacity: 0.25;
      }
      ::-moz-placeholder {
        font-size: 14px;
        color: inherit;
        opacity: 0.25
      }
      :-ms-input-placeholder {
        font-size: 14px;
        color: inherit;
        opacity: 0.25;
      }
      ::placeholder {
        font-size: 14px;
        color: inherit;
        opacity: 0.25;
      }
      
      *,
      *::before,
      *::after {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
      }

      *:focus {
        outline: none;
      }

      `,
    },
  ],

  presets: [
    presetWind3(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        montserrat: [
          {
            italic: true,
            name: 'Montserrat',
            weights: ['400', '600'],
          },
        ],
      },
      provider: 'google',
    }),
  ],
  safelist: [
    ...Array.from({ length: 12 }, (_, i) => `grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `sm:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `md:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `lg:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `gap-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `sm:gap-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `md:gap-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `lg:gap-${i + 1}`),
    ...Array.from({ length: 10 }, (_, i) => `my-${i + 2}`),
    ...Array.from({ length: 10 }, (_, i) => `sm:my-${i + 2}`),
  ],
  theme: {
    /* Matches Bootstrap for compatibility */
    breakpoints: {
      lg: '992px',
      md: '768px',
      sm: '576px',
      xl: '1200px',
      xxl: '1400px',
    },

    colors: {
      border: '#ced4da',
      /* User feedback */
      status: {
        danger: '#ff0000',
        info: '#17a2b8',
        success: '#28a745',
        warning: '#ffab00',
      },
      typography: {
        text: '#333333',
      },
      /* Branding */
      yagro: {
        darkGreen: {
          100: '#00CE6F',
          200: '#00B461',
          300: '#009B53',
          400: '#008246',
          50: '#00DB76',
          500: '#006838',
          600: '#004E2A',
          700: '#00351D',
          800: '#001B0F',
          900: '#000201',
          950: '#000000',
          DEFAULT: '#006838',
        },
        lightGreen: {
          100: '#D8EBBD',
          200: '#C5E29D',
          300: '#B2D97E',
          400: '#A0CF5E',
          50: '#E1F0CD',
          500: '#8DC63F',
          600: '#6F9E2F',
          700: '#517322',
          800: '#324715',
          900: '#141C08',
          950: '#050702',
          DEFAULT: '#8DC63F',
        },
      },
    },

    fonts: {
      primary: 'Montserrat, san-serif',
    },
  },
});
