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
        modal: '0px 15px 40px #4757e6',
        card: '-4px 4px 0px',
        gif: '4px 4px 0px 0px #ff6b95',
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
            top: '18px',
          },
          '100%': {
            top: '18px',
          },
        },
        circle3: {
          '0%': {
            top: 0,
          },
          '50%': {
            top: '36px',
          },
          '100%': {
            top: '36px',
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
            height: '10px',
            opacity: '1',
          },
          '75%': {
            height: '28px',
            opacity: '1',
          },
          '100%': {
            height: '28px',
            opacity: '1',
          },
        },
        arrowLeft: {
          '74%': {
            opacity: '0',
          },
          '75%': {
            height: '10px',
            opacity: '1',
            right: '16px',
          },
          '100%': {
            height: '30px',
            opacity: '1',
            right: '23.5px',
          },
        },
        arrowRight: {
          '74%': {
            opacity: 0,
          },
          '75%': {
            height: '10px',
            opacity: 1,
            left: '16px',
          },
          '100%': {
            height: '30px',
            opacity: 1,
            left: '23.5px',
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
      screens: {
        mobile: '1100px',
      },
      content: {
        ada: 'url("/icons/ADA.svg")',
        clip: 'url("/icons/paper-clip.svg")',
        tooltip: 'url("/icons/tooltip-symmetric.svg")',
      },
      transform: {
        roadmap: 'perspective(800px) rotateX(30deg)',
      },
      dropShadow: {
        wallet: '0px 2px 15px rgba(71, 87, 230, 0.4)',
      },
    },
  },
};
