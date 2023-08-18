import { WALLET_NAME_TO_DATA } from '@/shared/constants';
import type { Wallet, WalletParameters } from '@/shared/types';

const createWalletParameters = (walletName: Wallet['name']): WalletParameters => {
  return {
    wallet: WALLET_NAME_TO_DATA[walletName].title,
    isMainnet: false,
  };
};

export default createWalletParameters;
