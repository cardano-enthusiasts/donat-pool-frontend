import { useLocalStorageValue } from '@react-hookz/web';

import type { WalletCardanoKey } from '@/shared/types';

function useCardano() {
  const { value: cardanoIsInitialized } = useLocalStorageValue<true>('cardanoIsInitialized', {
    initializeWithValue: false,
    defaultValue: true,
  });
  const {
    value: connectedWalletCardanoKey,
    set,
    remove,
  } = useLocalStorageValue<WalletCardanoKey>('connectedWalletCardanoKey', {
    initializeWithValue: false,
    defaultValue: undefined,
  });

  return { initialized: cardanoIsInitialized, connectedWalletCardanoKey, connectWallet: set, disconnectWallet: remove };
}

export default useCardano;
