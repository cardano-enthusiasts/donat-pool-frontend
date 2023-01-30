import { createTheme, type PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: PaletteColorOptions;
    accent: PaletteColorOptions;
  }
  interface PaletteOptions {
    neutral: PaletteColorOptions;
    accent: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    accent: true;
  }
}

const { primary, secondary, neutral, accent } = {
  primary: '#006C84',
  secondary: '#6EB5C0',
  neutral: '#E2E8E4',
  accent: '#E2E8E4',
};

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
      dark: '#63a2ac',
    },
    neutral: {
      main: neutral,
    },
    accent: {
      main: accent,
    },
  },
});

export default theme;
