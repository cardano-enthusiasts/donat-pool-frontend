'use client';

import { useEffect } from 'react';

import { setInitialized as setCardanoInitialized, setActiveWalletCardanoKey } from '@/redux/slices/cardano';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal/ConnectWalletModal';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

function Layout({ children }: React.PropsWithChildren) {
  const cardanoIsInitialized = useAppSelector((state) => state.cardano.initialized);
  const someWalletIsActive = useAppSelector((state) => Boolean(state.cardano.activeWalletCardanoKey));
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function initializeCardano() {
      if (Object.hasOwn(window, 'cardano')) {
        for (const walletCardanoKey of ['nami', 'LodeWallet', 'flint', 'eternl'] as const) {
          if (
            // hasOwn on 16th line ensures that "cardano" is present in "window"
            Object.hasOwn(window.cardano as any, walletCardanoKey) &&
            (await window.cardano?.[walletCardanoKey]?.isEnabled())
          ) {
            dispatch(setActiveWalletCardanoKey(walletCardanoKey));
            break;
          }
        }
      }

      dispatch(setCardanoInitialized(true));
    }

    if (!cardanoIsInitialized) {
      void initializeCardano();
    }
  }, [cardanoIsInitialized, dispatch]);

  if (cardanoIsInitialized) {
    return someWalletIsActive ? children : <ConnectWalletModal />;
  }
}

export default Layout;
