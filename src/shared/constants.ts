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

const APP_URL = 'https://testnet.donat-pool.io';

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

export { ROUTES, APP_URL, walletDisconnect, userDecline, walletIsNotAvailable, missingCollateral, errors };
