import type { Metadata } from 'next';
import { Rammetto_One } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

import store from '@/store';
import StoreProvider from '@/StoreProvider';
import StyledComponentsProvider from '@/StyledComponentsProvider';

import './globals.css';

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
          <StoreProvider store={store}>{children}</StoreProvider>
        </StyledComponentsProvider>
        <Script src="/offchain/index.js" />
      </body>
    </html>
  );
}
