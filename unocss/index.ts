// https://unocss.dev/guide/config-file

import { defineConfig, presetIcons, presetUno } from 'unocss';
import type { Theme } from 'unocss/preset-uno';

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  preflights: [
    {
      getCSS: ({ theme }: { theme: Theme }) => {
        return `

      :root {
        interpolate-size: allow-keywords;
      }

      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        font-size: 16px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        line-height: 1.5;
        background-color: ${theme.colors?.background};
        color: ${typeof theme.colors?.text === 'object' ? theme.colors.text.DEFAULT : theme.colors?.text};
        display: flex;
        flex-direction: column;
      }

      body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        flex: 1;
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

      input:-webkit-autofill {
        background-color: transparent !important;
        -webkit-box-shadow: 0 0 0 50px white inset;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-size: inherit;
        font-weight: inherit;
      }

      img, svg {
        max-width: 100%;
        height: auto;
        display: inline-block;
      }

      ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li {
        padding: 0;
      }

      p {
        margin: 0;
      }

      button {
        appearance: none;
        background-color: transparent;
        border: none;
        font: inherit;
        cursor: pointer;
      }

      table {
        text-align: left;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
      }

      mark {
        background-color: inherit;
      }

      ::selection {
        background-color: ${typeof theme.colors?.brand === 'object' ? theme.colors.brand.DEFAULT : theme.colors?.brand};
        color: #ffffff;
      }

      ::-webkit-selection {
        background-color: ${typeof theme.colors?.brand === 'object' ? theme.colors.brand.DEFAULT : theme.colors?.brand};
        color: #ffffff;
      }

      ::-webkit-scrollbar {
          width: 0.25rem;
          cursor: pointer
      }

      ::-webkit-scrollbar-track {
        background-color: ${typeof theme.colors?.gray === 'object' ? theme.colors.gray.DEFAULT : theme.colors?.gray};
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${typeof theme.colors?.brand === 'object' ? theme.colors.brand.DEFAULT : theme.colors?.brand};
      }

      .fade-enter-from,
      .fade-leave-to {
        opacity: 0;
      }

      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.5s ease-in-out;
      }
      `;
      },
    },
  ],
  theme: {
    colors: {
      background: '#F3F5F6',
      text: {
        DEFAULT: '#0B1215',
        25: '#E6E7E7',
        50: '#CED0D0',
        100: '#9DA0A1',
        200: '#6D7173',
        300: '#3C4144',
        400: '#0B1215',
        500: '#090E11',
        600: '#070B0D',
        700: '#040708',
      },
      brand: {
        DEFAULT: '#006838',
        25: '#E5F0EB',
        50: '#CCE1D7',
        100: '#99C3AF',
        200: '#66A488',
        300: '#338660',
        400: '#006838',
        500: '#00532D',
        600: '#003E22',
        700: '#002A16',
      },
      yellow: {
        DEFAULT: '#F6DB00',
        25: '#FEFBE5',
        50: '#FDF8CC',
        100: '#FBF199',
        200: '#FAE966',
        300: '#F8E233',
        400: '#F6DB00',
        500: '#C5AF00',
        600: '#948300',
        700: '#625800',
      },
      gray: {
        DEFAULT: '#E1E5E8',
        25: '#FCFCFC',
        50: '#F8F9FA',
        100: '#F2F3F5',
        200: '#EBEEF0',
        300: '#E5E8EB',
        400: '#E1E5E8',
        500: '#B2B5B8',
        600: '#85888A',
        700: '#595A5C',
      },
      secondary: {
        border: '#DEE2E6',
        borderSidebar: '#E6E9EC',
        cream: '#EBE5CA',
        greenLight: '#E6F0EC',
      },
      categorical: {
        blue: '#0384C6',
        green: '#05976A',
        pink: '#DA2778',
        purple: '#7B3AEC',
        teal: '#23888E',
        gray: '#8896A9',
        orangeDark: '#D48208',
        orangeLight: '#EF8F01',
      },
      feedback: {
        error: {
          DEFAULT: '#D92D20',
          25: '#FBEAE8',
          50: '#F7D5D2',
          100: '#F0ABA6',
          200: '#E88179',
          300: '#E1574D',
          400: '#D92D20',
          500: '#AE241A',
          600: '#821B13',
          700: '#2B0906',
        },
        warning: {
          DEFAULT: '#DC6803',
          25: '#FBF0E5',
          50: '#F8E1CD',
          100: '#F1C39A',
          200: '#EAA468',
          300: '#E38635',
          400: '#DC6803',
          500: '#B05302',
          600: '#843E02',
          700: '#2C1501',
        },
        success: {
          DEFAULT: '#039855',
          25: '#E5F4EE',
          50: '#CDEADD',
          100: '#9AD6BB',
          200: '#68C199',
          300: '#35AD77',
          400: '#039855',
          500: '#027A44',
          600: '#025B33',
          700: '#011E11',
        },
        information: {
          DEFAULT: '#59A7F6',
          25: '#E0F2FF',
          50: '#CAE8FF',
          100: '#B5DEFF',
          200: '#96CEFD',
          300: '#78BBFA',
          400: '#59A7F6',
          500: '#3892F3',
          600: '#147AF3',
          700: '#0265DC',
        },
      },
    },
    shortcuts: {
      'ÿ-transition-fade-in':
        'ÿ-transition-all ÿ-duration-100 ÿ-ease-out ÿ-transform ÿ-opacity-0 ÿ-animate-fade-in ÿ-animate-fill-forwards',
      'ÿ-center-screen': 'ÿ-mx-auto ÿ-my-auto ÿ-absolute ÿ-inset-0 ÿ-h-fit',
      'ÿ-card': 'ÿ-rounded-[8px] ÿ-bg-white ÿ-shadow-sm ÿ-p-24px ÿ-mb-8',
      'ÿ-fullscreen': 'ÿ-absolute ÿ-inset-0 ÿ-z-0 ÿ-w-full',
    },
    /* Matches Bootstrap for compatibility */
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
  content: {
    pipeline: {
      include: ['src/**/*.{vue,ts}', /(.*\/)yagro-ui(.*)\.(js)$/],
    },
  },
});
