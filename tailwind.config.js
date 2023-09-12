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
        green: '#29dea8',
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
        xl: '0 0.9375rem 0.9375rem 0 rgba(186, 186, 186, 0.4)',
      },
      keyframes: {
        accentPush: {
          '90%': { 'margin-left': 0, 'margin-top': 0 },
          '100%': { 'margin-left': '-1rem', 'margin-top': '1rem' },
        },
        accentPushBefore: {
          '90%': { bottom: '-1.3625rem', height: '1.375rem', left: '-0.7063rem' },
          '100%': { bottom: '-0.4375rem', height: '0.4375rem', left: '-0.25rem' },
        },
        accentPushAfter: {
          '90%': { left: '-1.375rem', width: '1.375rem', bottom: '-0.7063rem' },
          '100%': { left: '-0.4375rem', width: '0.4375rem', bottom: '-0.25rem' },
        },
        standardPush: {
          '90%': { left: '0', top: '0' },
          '100%': { left: '-0.25rem', top: '0.25rem' },
        },
        standardPushBefore: {
          '90%': { left: '-0.25rem', bottom: '-0.25rem' },
          '100%': { left: '0', bottom: '0' },
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
        accentPush: 'accentPush 3s infinite alternate',
        accentPushBefore: 'accentPushBefore 3s alternate infinite',
        accentPushAfter: 'accentPushAfter 3s alternate infinite',
        standardPush: 'standardPush 3s alternate infinite',
        standardPushBefore: 'standardPushBefore 3s alternate infinite',
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
