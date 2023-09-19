/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#ffc5cf',
        blue: {
          DEFAULT: '#4757e6',
          light: '#97dfff',
        },
        red: '#ff6b95',
        pink: '#ffb5ca',
        green: {
          DEFAULT: '#29dea8',
          dark: '#28d8B1',
        },
        yellow: '#fed900',
        white: '#fff',
        black: '#141414',
        gray: {
          DEFAULT: '#333',
          secondary: '#828587',
          tertiary: '#5c5f60',
        },
        error: '#c820f2',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        8.5: '2.125rem',
        15: '3.75rem',
        30: '7.5rem',
        480: '120rem',
      },
      fontFamily: {
        'microsoft-ya-hei': 'var(--microsoft-ya-hei-font)',
        'rammetto-one': 'var(--rammetto-one-font)',
      },
      fontSize: {
        'menu-default': ['0.9375rem', '1rem'],
        'menu-active': ['3.375rem', '3.5rem'],
      },
      gridTemplateColumns: {
        projects: 'repeat(auto-fill, minmax(20.3125rem, 1fr))',
      },
      screens: {
        xxs: '380px',
        '1.5xl': '1430px',
        fhd: '1920px',
      },
      boxShadow: {
        DEFAULT: '-0.25rem 0.25rem',
        pressed: '-0.125rem 0.125rem',
        xl: '0 0.9375rem 0.9375rem 0 rgba(186, 186, 186, 0.4)',
      },
      keyframes: {
        quaternaryButtonPress: {
          '80%': { transform: 'none' },
          '90%': { transform: 'translate(-0.75rem, 0.75rem)' },
          '100%': { transform: 'none' },
        },
        quaternaryButtonPressBefore: {
          '80%': { width: '1.5rem' },
          '90%': { width: '0.75rem' },
          '100%': { width: '1.5rem' },
        },
        quaternaryButtonPressAfter: {
          '80%': { height: '1.5rem' },
          '90%': { height: '0.75rem' },
          '100%': { height: '1.5rem' },
        },
        roadmap: {
          '0%': {
            top: '100%',
          },
          '100%': {
            top: '-340%',
          },
        },
        circle2: {
          '0%': {
            top: '0',
          },
          '25%': {
            top: '1.125rem',
          },
          '100%': {
            top: '1.125rem',
          },
        },
        circle3: {
          '0%': {
            top: 0,
          },
          '50%': {
            top: '2.25rem',
          },
          '100%': {
            top: '2.25rem',
          },
        },
        circle4: {
          '50%': {
            opacity: '0',
          },
          '55%': {
            opacity: '1',
          },
        },
        line: {
          '49%': {
            opacity: '0',
          },
          '50%': {
            height: '0.625rem',
            opacity: '1',
          },
          '75%': {
            height: '1.75rem',
            opacity: '1',
          },
          '100%': {
            height: '1.75rem',
            opacity: '1',
          },
        },
        arrowLeft: {
          '74%': {
            opacity: '0',
          },
          '75%': {
            height: '0.625rem',
            opacity: '1',
            right: '1rem',
          },
          '100%': {
            height: '1.875rem',
            opacity: '1',
            right: '1.4688rem',
          },
        },
        arrowRight: {
          '74%': {
            opacity: 0,
          },
          '75%': {
            height: '0.625rem',
            opacity: 1,
            left: '1rem',
          },
          '100%': {
            height: '1.875rem',
            opacity: 1,
            left: '1.4688rem',
          },
        },
      },
      animation: {
        roadmap: 'roadmap 60s linear infinite',
        circle2: 'circle2 1s forwards linear infinite',
        circle3: 'circle3 1s forwards linear infinite',
        circle4: 'circle3 1s forwards linear infinite',
        line: 'line 1s forwards linear infinite',
        arrowLeft: 'arrowLeft 1s forwards linear infinite',
        arrowRight: 'arrowRight 1s forwards linear infinite',
      },
    },
  },
};
