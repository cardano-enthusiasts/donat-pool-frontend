/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'microsoft-ya-hei': 'var(--microsoft-ya-hei-font)',
        'rammetto-one': 'var(--rammetto-one-font)',
      },
      colors: {
        purple: '#ffc5cf',
        blue: {
          DEFAULT: '#4757e6',
          light: '#97dfff',
        },
        red: '#ff6b95',
        green: '#29dea8',
        yellow: '#fed900',
        white: '#fff',
        black: '#141414',
        gray: {
          primary: '#333',
          secondary: '#828587',
          tertiary: '#5c5f60',
        },
        error: '#c820f2',
      },
      gridTemplateColumns: {
        projects: 'repeat(auto-fill, minmax(325px, 1fr))',
      },
      boxShadow: {
        xl: '0px 15px 15px 0px rgba(186, 186, 186, 0.4)',
      },
      keyframes: {
        accentPush: {
          '90%': { 'margin-left': 0, 'margin-top': 0 },
          '100%': { 'margin-left': '-16px', 'margin-top': '16px' },
        },
        accentPushBefore: {
          '90%': { bottom: '-21.8px', height: '22px', left: '-11.3px' },
          '100%': { bottom: '-7px', height: '7px', left: '-4px' },
        },
        accentPushAfter: {
          '90%': { left: '-22px', width: '22px', bottom: '-11.3px' },
          '100%': { left: '-7px', width: '7px', bottom: '-4px' },
        },
        standardPush: {
          '90%': { left: '0', top: '0' },
          '100%': { left: '-4px', top: '4px' },
        },
        standardPushBefore: {
          '90%': { left: '-4px', bottom: '-4px' },
          '100%': { left: '0', bottom: '0' },
        },
      },
      animation: {
        accentPush: 'accentPush 3s infinite alternate',
        accentPushBefore: 'accentPushBefore 3s alternate infinite',
        accentPushAfter: 'accentPushAfter 3s alternate infinite',
        standardPush: 'standardPush 3s alternate infinite',
      },
    },
  },
};
