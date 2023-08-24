import type { WalletCardanoKey } from '@/shared/types';

const WALLET_CARDANO_KEY_TO_WALLET = {
  nami: 'Nami',
  LodeWallet: 'Lode',
  flint: 'Flint',
  eternl: 'Eternl',
} as const;

const createConnectionParameters = (walletCardanoKey: WalletCardanoKey) => {
  return {
    wallet: WALLET_CARDANO_KEY_TO_WALLET[walletCardanoKey],
    isMainnet: false,
  } as const;
};

export default createConnectionParameters;
