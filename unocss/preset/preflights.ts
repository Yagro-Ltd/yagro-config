export function getPreflights({ theme }) {
  return [
    {
      getCSS: () => `
      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        font-family: ${theme.fonts.primary};
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
