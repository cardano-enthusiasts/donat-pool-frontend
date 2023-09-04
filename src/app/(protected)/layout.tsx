'use client';

import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setInitialized, setActiveWalletCardanoKey } from '@/redux/slices/cardano';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal';

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
            Object.hasOwn(window.cardano!, walletCardanoKey) &&
            (await window.cardano?.[walletCardanoKey]?.isEnabled())
          ) {
            dispatch(setActiveWalletCardanoKey(walletCardanoKey));
            break;
          }
        }
      }

      dispatch(setInitialized(true));
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
