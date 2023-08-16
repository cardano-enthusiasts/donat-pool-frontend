import type { Metadata } from 'next';
import { Rammetto_One } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

import StoreProvider from '@/redux/Provider';
import StyledComponentsProvider from '@/StyledComponentsProvider';

import './global.css';

const microsoftYaHeiFont = localFont({
  src: [
    {
      path: './microsoft-ya-hei-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './microsoft-ya-hei-700.woff2',
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

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html
      className={`${microsoftYaHeiFont.variable} ${rammettoOneFont.variable} bg-white font-microsoft-ya-hei text-[16px]/6 text-black`}
      lang="en"
    >
      <body>
        <StyledComponentsProvider>
          <StoreProvider>{children}</StoreProvider>
        </StyledComponentsProvider>
        <Script src="/offchain/index.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
