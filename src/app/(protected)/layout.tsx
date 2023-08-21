'use client';

import { useEffect } from 'react';

import { setIsInitialized as setIsCardanoInitialized, setWallet, selectConnectedWallet } from '@/redux/slices/cardano';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

import { WALLET_CARDANO_KEY_TO_WALLET_NAME } from './constants';

const Layout = ({ children }: React.PropsWithChildren) => {
  const isCardanoInitialized = useAppSelector((state) => state.cardano.isInitialized);
  const connectedWallet = useAppSelector(selectConnectedWallet);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function initializeCardano() {
      const someWalletInstalled = Object.hasOwn(window, 'cardano');

      for (const walletCardanoKey of ['nami', 'LodeWallet', 'flint', 'eternl'] as const) {
        const isInstalled = someWalletInstalled && Object.hasOwn(window.cardano as any, walletCardanoKey);

        dispatch(
          setWallet({
            name: WALLET_CARDANO_KEY_TO_WALLET_NAME[walletCardanoKey],
            isInstalled,
            isConnected: isInstalled && ((await window.cardano?.[walletCardanoKey]?.isEnabled()) as any),
          }),
        );
      }

      dispatch(setIsCardanoInitialized(true));
    }

    if (!isCardanoInitialized) {
      initializeCardano();
    }
  }, [isCardanoInitialized, dispatch]);

  if (isCardanoInitialized) {
    return connectedWallet ? children : <ConnectWalletModal />;
  }
};

export default Layout;
