import type { Metadata } from 'next';
import { Rammetto_One } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/core/store';
import { theme } from '@/shared/styles/theme';

const microsoftYaHeiFont = localFont({
  src: [
    {
      path: '/fonts/microsoft-ya-hei-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/microsoft-ya-hei-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--microsoft-ya-hei-font',
});
const rammetoOneFont = Rammetto_One({
  weight: '400',
  variable: '--rammeto-one-font',
});
console.log(rammetoOneFont);

export const metadata: Metadata = {
  themeColor: '#ff6b95',
  manifest: '/favicons/site.webmanifest',
  other: {
    'msapplication-TileColor': '#603cba',
    'msapplication-navbutton-color': '#ff6b95',
    'apple-mobile-web-app-status-bar-style': '#ff6b95',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`${microsoftYaHeiFont.variable} bg-white font-sans text-[16px] text-black`}
      lang="en"
    >
      <body>
        <ThemeProvider theme={theme}>
          <ReduxProvider store={store}>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
