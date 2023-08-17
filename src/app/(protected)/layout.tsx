'use client';

import { useEffect } from 'react';

import {
  setInitialized,
  setProviderInstalledByName,
  setProviderConnectedByName,
  setProviderIconByName,
} from '@/redux/slices/cardano';
import ConnectWalletModal from '@/shared/components/ConnectWalletModal';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

const Layout = ({ children }: React.PropsWithChildren) => {
  const cardanoInitialized = useAppSelector((state) => state.cardano.initialized);
  const providers = useAppSelector((state) => state.cardano.providers);
  const dispatch = useAppDispatch();

  const someProviderConnected = providers.some(({ connected }) => Boolean(connected));

  useEffect(() => {
    async function initializeCardano() {
      const someWalletInstalled = Object.hasOwn(window, 'cardano');

      for (const providerName of ['nami', 'flint', 'eternl'] as const) {
        const installed =
          someWalletInstalled && Object.hasOwn(window.cardano as NonNullable<Window['cardano']>, providerName);

        dispatch(setProviderInstalledByName({ name: providerName, value: installed }));
        dispatch(
          setProviderConnectedByName({
            name: providerName,
            value: installed && ((await window.cardano?.[providerName]?.isEnabled()) as any),
          }),
        );
        dispatch(setProviderIconByName({ name: providerName, value: window.cardano?.[providerName]?.icon as any }));
      }

      dispatch(setInitialized(true));
    }

    if (!cardanoInitialized) {
      initializeCardano();
    }
  }, [cardanoInitialized, dispatch]);

  if (cardanoInitialized) {
    return someProviderConnected ? children : <ConnectWalletModal />;
  }
};

export default Layout;
