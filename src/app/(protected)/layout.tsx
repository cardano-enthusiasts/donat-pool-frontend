'use client';

import { useEffect } from 'react';

import { setInitialized, setWallet } from '@/redux/slices/cardano';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

import { WALLET_CARDANO_KEY_TO_WALLET_NAME } from './constants';

const Layout = ({ children }: React.PropsWithChildren) => {
  const cardanoInitialized = useAppSelector((state) => state.cardano.initialized);
  const wallets = useAppSelector((state) => state.cardano.wallets);
  const dispatch = useAppDispatch();

  const someWalletConnected = Boolean(wallets?.some(({ connected }) => Boolean(connected)));

  useEffect(() => {
    async function initializeCardano() {
      const someWalletInstalled = Object.hasOwn(window, 'cardano');

      for (const walletCardanoKey of ['nami', 'flint', 'eternl'] as const) {
        const installed = someWalletInstalled && Object.hasOwn(window.cardano as any, walletCardanoKey);

        dispatch(
          setWallet({
            cardanoKey: walletCardanoKey,
            name: WALLET_CARDANO_KEY_TO_WALLET_NAME[walletCardanoKey],
            installed,
            connected: installed && ((await window.cardano?.[walletCardanoKey]?.isEnabled()) as any),
          }),
        );
      }

      dispatch(setInitialized(true));
    }

    if (!cardanoInitialized) {
      initializeCardano();
    }
  }, [cardanoInitialized, dispatch]);

  if (cardanoInitialized) {
    return someWalletConnected ? children : <ConnectWalletModal />;
  }
};

export default Layout;
