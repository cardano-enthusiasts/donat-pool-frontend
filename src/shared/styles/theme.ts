import { createTheme, type PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: PaletteColorOptions;
    darkNeutral: PaletteColorOptions;
    accent: PaletteColorOptions;
    lightAccent: PaletteColorOptions;
  }
  interface PaletteOptions {
    neutral: PaletteColorOptions;
    darkNeutral: PaletteColorOptions;
    accent: PaletteColorOptions;
    lightAccent: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    darkNeutral: true;
    accent: true;
    lightAccent: true;
  }
}

const colors = {
  primary: '#03484D',
  neutral: '#DEE5ED',
  darkNeutral: '#DEE5ED',
  accent: '#008CA5',
  lightAccent: '#8AC1C8',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    darkNeutral: {
      main: colors.darkNeutral,
    },
    neutral: {
      main: colors.neutral,
    },
    accent: {
      main: colors.accent,
    },
    lightAccent: {
      main: colors.lightAccent,
    },
  },
});

export { theme, colors };
