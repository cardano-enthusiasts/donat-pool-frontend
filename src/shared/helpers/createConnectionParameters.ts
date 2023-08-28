import { WalletCardanoKey } from '@/shared/types';

const WALLET_CARDANO_KEY_TO_WALLET = {
  nami: 'Nami',
  LodeWallet: 'Lode',
  flint: 'Flint',
  eternl: 'Eternl',
} as const;

function createConnectionParameters(walletCardanoKey: WalletCardanoKey) {
  return {
    wallet: WALLET_CARDANO_KEY_TO_WALLET[walletCardanoKey],
    isMainnet: false,
  } as const;
}

export default createConnectionParameters;
