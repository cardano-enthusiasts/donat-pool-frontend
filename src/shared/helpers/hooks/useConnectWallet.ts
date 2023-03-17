import { useOffchain } from './';
import { getOffchainError } from '../';

const useConnectWallet = () => {
  const offchain = useOffchain();

  if (offchain) {
    return () => {
      offchain.connectWallet();
    };
  }
  return () => getOffchainError;
};

export { useConnectWallet };
