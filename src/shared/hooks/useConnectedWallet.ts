import { useLocalStorageValue } from '@react-hookz/web';

import type { WalletCardanoKey } from '@/shared/types';

function useConnectedWallet() {
  const { value, set, remove } = useLocalStorageValue<WalletCardanoKey>('connectedWalletCardanoKey', {
    initializeWithValue: false,
  });

  return { cardanoKey: value, connectWallet: set, disconnectWallet: remove };
}

export default useConnectedWallet;
