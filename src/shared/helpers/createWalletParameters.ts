import { WALLET_NAME_TO_DATA } from '@/shared/constants';
import type { Wallet } from '@/shared/types';

const createWalletParameters = (walletName: Wallet['name']) => {
  return {
    wallet: WALLET_NAME_TO_DATA[walletName].offchainName,
    isMainnet: false,
  } as const;
};

export default createWalletParameters;
