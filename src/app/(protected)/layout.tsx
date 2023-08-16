'use client';

import { useState, useEffect } from 'react';

import { setName as setConnectedWalletName } from '@/redux/slices/connectedWallet';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

export default ({ children }: React.PropsWithChildren) => {
  const [cardanoInitialized, setCardanoInitialized] = useState(false);
  const connectedWalletName = useAppSelector((state) => state.connectedWallet.name);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function initializeCardano() {
      if (window?.cardano?.nami) {
        if (await window.cardano.nami.isEnabled()) {
          dispatch(setConnectedWalletName(window.cardano.nami.name));
          setCardanoInitialized(true);
          return;
        }
      }

      setCardanoInitialized(true);
    }

    initializeCardano();
  }, [dispatch]);

  if (cardanoInitialized) {
    return connectedWalletName ? children : <ConnectWalletModal />;
  }
};
