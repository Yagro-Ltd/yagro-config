import type { Preflight } from 'unocss';

export function getPreflights({ theme }: { theme: any }): Preflight[] {
  return [
    {
      getCSS: () => `
      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        font-family: ${theme.fontFamily?.primary};
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
      
      *,
      *::before,
      *::after {
        box-sizing: inherit;
        -webkit-font-smoothing: antialiased;
      }
      `,
    },
  ];
}
