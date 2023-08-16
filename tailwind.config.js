/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'microsoft-ya-hei': 'var(--microsoft-ya-hei-font)',
        'rammetto-one': 'var(--rammetto-one-font)',
      },
      fontSize: {
        'menu-active': ['3.375rem', '3.5rem'],
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
      spacing: {
        15: '3.75rem',
        25: '6.25rem',
      },
    },
  },
};
