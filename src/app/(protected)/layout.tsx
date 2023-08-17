'use client';

import { useEffect } from 'react';

import { setInitialized as setCardanoInitialized, setWallet, selectConnectedWallet } from '@/redux/slices/cardano';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

import { WALLET_CARDANO_KEY_TO_WALLET_NAME } from './constants';

const Layout = ({ children }: React.PropsWithChildren) => {
  const cardanoInitialized = useAppSelector((state) => state.cardano.initialized);
  const connectedWallet = useAppSelector(selectConnectedWallet);
  const dispatch = useAppDispatch();

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
