'use client';

import type { Metadata } from 'next';
import { Rammetto_One } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/core/store';

import './globals.css';
import StyledComponentsProvider from '@/styled';

const microsoftYaHeiFont = localFont({
  src: [
    {
      path: '../../public/fonts/microsoft-ya-hei-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/microsoft-ya-hei-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--microsoft-ya-hei-font',
});
const rammettoOneFont = Rammetto_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--rammetto-one-font',
});

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
      className={`${microsoftYaHeiFont.variable} ${microsoftYaHeiFont.className} ${rammettoOneFont.variable} bg-white text-[16px] text-black`}
      lang="en"
    >
      <body>
        <StyledComponentsProvider>
          <ReduxProvider store={store}>{children}</ReduxProvider>
        </StyledComponentsProvider>
        <Script src="/offchain/index.js" />
      </body>
    </html>
  );
}
