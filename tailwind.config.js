/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        15: '3.75rem',
        480: '120rem',
      },
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
        projects: 'repeat(auto-fill, minmax(20.3125rem, 1fr))',
      },
      screens: {
        '3xl': '1920px',
      },
      boxShadow: ({ theme }) => ({
        xl: '0 0.9375rem 0.9375rem 0 rgba(186, 186, 186, 0.4)',
        modal: `0 0.9375rem 2.5rem ${theme('colors.blue')}`,
        card: '-0.25rem 0.25rem 0',
        gif: `0.25rem 0.25rem 0 0 ${theme('colors.red')}`,
      }),
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
      backgroundImage: {
        'section-cat': "url('/img/section-cat.svg')",
      },
      backgroundSize: {
        '100%': '100%',
      },
      backgroundPosition: {
        '0-100%': '0 100%',
      },
      content: {
        ada: 'url("/icons/ADA.svg")',
        clip: 'url("/icons/paper-clip.svg")',
        tooltip: 'url("/icons/tooltip-symmetric.svg")',
        arrow: 'url("/icons/arrow.svg")',
      },
      transform: {
        roadmap: 'perspective(50) rotateX(30deg)',
      },
      dropShadow: {
        wallet: '0 0.125rem 0.9375rem rgba(71, 87, 230, 0.4)',
      },
    },
  },
};
