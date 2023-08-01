'use client';

import type { Metadata } from 'next';
import { Rammetto_One } from 'next/font/google';
import localFont from 'next/font/local';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  useDispatch,
  useSelector,
  Provider as ReduxProvider,
} from 'react-redux';
import StyledComponentsRegistry from '@/lib/registry';
import { store } from '@/core/store';
import { setWalletStatusSuccess } from '@/features/info/redux/actionCreators';
import { NotAvailableError } from '@/shared/components';
import { type AppReduxState } from '@/shared/types';

import './globals.css';

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
  const pathname = usePathname();
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data,
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const [walletIsNotAvailable, setWalletIsNotAvailable] = useState(false);
  const routes = [
    { path: '/', isAvailableWithoutWallet: true },
    {
      path: '/my-projects',
      isAvailableWithoutWallet: false,
    },
    {
      path: '/new-project',
      isAvailableWithoutWallet: false,
    },
    {
      path: '/all-projects',
      isAvailableWithoutWallet: false,
    },
    {
      path: '/all-projects/:id',
      isAvailableWithoutWallet: false,
    },
    {
      path: '/my-projects/:id',
      isAvailableWithoutWallet: false,
    },
    { path: '/faq', isAvailableWithoutWallet: true },
    {
      path: '/roadmap',
      isAvailableWithoutWallet: true,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      const isNotAvailable =
        walletStatus === 'notAvailable' ||
        !window.cardano ||
        !window.cardano.nami;
      const pathsWithoutWallets = routes.filter(
        ({ isAvailableWithoutWallet }) => isAvailableWithoutWallet,
      );
      const isWalletFreePage = pathsWithoutWallets.some(
        ({ path }) => path === pathname,
      );

      setWalletIsNotAvailable(isNotAvailable && !isWalletFreePage);
    }, 1000);
  }, [walletStatus, pathname]);

  useEffect(() => {
    if (walletStatus === 'declined') {
      router.push('/');
      dispatch(setWalletStatusSuccess('default'));
    }

    if (walletIsNotAvailable) {
      router.push('/');
    }
  }, [walletStatus, window]);

  return walletIsNotAvailable ? (
    <NotAvailableError />
  ) : (
    <html
      className={`${microsoftYaHeiFont.variable} bg-white font-sans text-[16px] text-black`}
      lang="en"
    >
      <body>
        <StyledComponentsRegistry>
          <ReduxProvider store={store}>{children}</ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
