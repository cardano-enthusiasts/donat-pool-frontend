import { StaticImageData } from 'next/image';

import eternlLogo from '@public/icons/eternl.png';
import flintLogo from '@public/icons/flint.svg';
import lodeLogo from '@public/icons/lode.svg';
import namiLogo from '@public/icons/nami.svg';

const ROUTES = {
  home: '/',
  homeTutorial: '/#tutorial',
  donatPools: '/donat-pools',
  myDonatPools: '/my-donat-pools',
  newDonatPool: '/new-donat-pool',
  roadmap: '/roadmap',
  faq: '/faq',
  termsOfUse: 'terms-of-use',
  mock: '/mock-address',
} as const;

const WALLET_CARDANO_KEY_TO_LOGO = {
  nami: namiLogo as StaticImageData,
  LodeWallet: lodeLogo as StaticImageData,
  flint: flintLogo as StaticImageData,
  eternl: eternlLogo,
} as const;

const walletDisconnect =
  'enableWallet failed: The request was refused due to lack of access - e.g. wallet disconnects.';
const userDecline = '{"code":2,"info":"User declined to sign the transaction."}';
const walletIsNotAvailable = 'Wallet is not available. Use `isWalletAvailable NamiWallet` before connecting.';
const missingCollateral = 'Nami wallet missing collateral';

const errors = {
  [walletDisconnect]: 'The request was refused due to lack of access - e.g. wallet disconnects.',
  [userDecline]: 'You declined to sign the transaction.',
  [walletIsNotAvailable]: 'Wallet is not available. Please install Nami wallet in a suitable browser (Chrome, Brave)',
  [missingCollateral]: 'Nami wallet missing collateral. Please add a collateral',
};

export {
  ROUTES,
  WALLET_CARDANO_KEY_TO_LOGO,
  walletDisconnect,
  userDecline,
  walletIsNotAvailable,
  missingCollateral,
  errors,
};
