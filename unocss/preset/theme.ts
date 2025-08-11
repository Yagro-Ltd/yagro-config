export function getTheme() {
  return {
    fonts: {
      primary: 'Montserrat, san-serif',
    },
    colors: {
      brand: {
        greenDark: '#006838',
        greenLight: '#8DC63F',
      },
      secondary: {
        yellow: '#F6DB00',
        yellowLight: '#FAEC7F',
        cream: '#EBE5CA',
        greenLightest: '#E6F0EC',
      },
      status: {
        success: '#28a745',
        danger: '#ff0000',
        warning: '#ffab00',
        info: '#17a2b8',
      },
      grayscale: {
        grayDarkest: '#353A3F',
        grayDarker: '#45494D',
        grayDark: '#6C757D',
        gray: '#6C757D',
        grayLight: '#6C757D',
        grayLighter: '#ABB5BE',
      },
      borders: {
        input: '#CED4DA',
        sidebar: 'E6E9EC',
      },
    },
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
  };
}
