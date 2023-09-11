import type { Metadata } from 'next';
import { Rammetto_One } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

import StoreProvider from '@/redux/Provider';

import './global.css';

const rammettoOneFont = Rammetto_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--rammetto-one-font',
});
const microsoftYaHeiFont = localFont({
  src: [
    {
      path: '../../public/fonts/microsoft-ya-hei-400.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/microsoft-ya-hei-700.woff2',
      weight: '700',
    },
  ],
  variable: '--microsoft-ya-hei-font',
});

const metadata: Metadata = {
  applicationName: 'Donat.Pool',
  generator: 'Next.js',
  title: {
    template: 'Donat.Pool: %s',
    default: 'Donat.Pool',
  },
  themeColor: '#ff6b95',
  openGraph: {
    type: 'website',
  },
};

function Layout({ children }: React.PropsWithChildren) {
  return (
    <html
      className={`${rammettoOneFont.variable}
        ${microsoftYaHeiFont.variable}
        bg-white
        font-microsoft-ya-hei
        text-[16px]
        text-black`}
      lang="en"
    >
      <body>
        <StoreProvider>{children}</StoreProvider>
        <Script src="/offchain/index.js" />
      </body>
    </html>
  );
}

export { Layout as default, metadata };
