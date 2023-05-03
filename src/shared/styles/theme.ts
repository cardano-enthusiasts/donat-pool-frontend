import { type Theme } from './types';

const dark100 = '#1f2041';
const dark100RGBCode = '31, 32, 65';
const primary = '#bc9cff';
const theme: Theme = {
  colors: {
    dark100,
    dark75: `rgba(${dark100RGBCode}, 0.75)`,
    dark50: `rgba(${dark100RGBCode}, 0.5)`,
    dark25: `rgba(${dark100RGBCode}, 0.25)`,
    dark10: `rgba(${dark100RGBCode}, 0.1)`,
    dark5: `rgba(${dark100RGBCode}, 0.05)`,

    primary,
    primary50: `rgba(188, 156, 255, 0.5)`,
    secondary: '#6fcf97',
    primaryGradient: `linear-gradient(180deg, ${primary} 0%, #8ba4f9 100%)`,
    primaryGradient50:
      'linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%)',
    primaryGradient25:
      'linear-gradient(180deg, rgba(188, 156, 255, 0.25) 0%, rgba(139, 164, 249, 0.25) 100%)',
    secondaryGradient: 'linear-gradient(180deg, $secondary 0%, #66d2ea 100%)',

    purple: '#FFC5CF',
    lightBlue: '#97DFFF',
    red: '#FF6B95',
    blue: '#4757E6',
    green: '#29DEA8',
    yellow: '#FED900',
    white: '#FFFFFF',
    black: ' #141414',
    gray: '#828587',
  },
};

export { theme };
