import { Metadata } from 'next';
import { Rammetto_One } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

import StoreProvider from '@/redux/Provider';

import './global.css';

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

const metadata: Metadata = {
  themeColor: '#ff6b95',
  other: {
    'msapplication-TileColor': '#603cba',
    'msapplication-navbutton-color': '#ff6b95',
    'apple-mobile-web-app-status-bar-style': '#ff6b95',
  },
};

function Layout({ children }: React.PropsWithChildren) {
  return (
    <html
      className={`${microsoftYaHeiFont.variable}
          ${rammettoOneFont.variable}
          bg-white
          font-microsoft-ya-hei
          text-[16px]/6
          text-black`}
      lang="en"
    >
      <body>
        <StoreProvider>{children}</StoreProvider>
        <Script src="/offchain/index.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}

export { Layout as default, metadata };
