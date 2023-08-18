'use client';

import { useEffect } from 'react';

import { setInitialized as setCardanoInitialized, setWallet, selectConnectedWallet } from '@/redux/slices/cardano';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

const Layout = ({ children }: React.PropsWithChildren) => {
  const cardanoInitialized = useAppSelector((state) => state.cardano.initialized);
  const connectedWallet = useAppSelector(selectConnectedWallet);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function initializeCardano() {
      const someWalletInstalled = Object.hasOwn(window, 'cardano');

      for (const walletName of ['nami', 'flint', 'eternl'] as const) {
        const installed = someWalletInstalled && Object.hasOwn(window.cardano as any, walletName);

        dispatch(
          setWallet({
            name: walletName,
            installed,
            connected: installed && ((await window.cardano?.[walletName]?.isEnabled()) as any),
          }),
        );
      }

      dispatch(setCardanoInitialized(true));
    }

    if (!cardanoInitialized) {
      initializeCardano();
    }
  }, [cardanoInitialized, dispatch]);

  if (cardanoInitialized) {
    return connectedWallet ? children : <ConnectWalletModal />;
  }
};

export default Layout;
