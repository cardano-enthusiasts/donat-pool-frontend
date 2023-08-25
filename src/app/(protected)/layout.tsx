'use client';

import { useEffect } from 'react';

import { setIsInitialized as setIsCardanoInitialized, setActiveWalletCardanoKey } from '@/redux/slices/cardano';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal/ConnectWalletModal';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

function Layout({ children }: React.PropsWithChildren) {
  const isCardanoInitialized = useAppSelector((state) => state.cardano.isInitialized);
  const isSomeWalletActive = useAppSelector((state) => Boolean(state.cardano.activeWalletCardanoKey));
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function initializeCardano() {
      if (Object.hasOwn(window, 'cardano')) {
        for (const walletCardanoKey of ['nami', 'LodeWallet', 'flint', 'eternl'] as const) {
          if (
            Object.hasOwn(window.cardano as any, walletCardanoKey) &&
            ((await window.cardano?.[walletCardanoKey]?.isEnabled()) as any)
          ) {
            dispatch(setActiveWalletCardanoKey(walletCardanoKey));
            break;
          }
        }
      }

      dispatch(setIsCardanoInitialized(true));
    }

    if (!isCardanoInitialized) {
      initializeCardano();
    }
  }, [isCardanoInitialized, dispatch]);

  if (isCardanoInitialized) {
    return isSomeWalletActive ? children : <ConnectWalletModal />;
  }
}

export default Layout;
