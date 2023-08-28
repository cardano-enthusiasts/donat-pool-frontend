const walletDisconnect =
  'enableWallet failed: The request was refused due to lack of access - event.g. wallet disconnects.';
const userDecline = '{"code":2,"info":"User declined to sign the transaction."}';
const walletIsNotAvailable = 'Wallet is not available. Use `isWalletAvailable NamiWallet` before connecting.';
const missingCollateral = 'Nami wallet missing collateral';

const errors = {
  [walletDisconnect]: 'The request was refused due to lack of access - event.g. wallet disconnects.',
  [userDecline]: 'You declined to sign the transaction.',
  [walletIsNotAvailable]: 'Wallet is not available. Please install Nami wallet in a suitable browser (Chrome, Brave)',
  [missingCollateral]: 'Nami wallet missing collateral. Please add a collateral',
};

export { walletDisconnect, userDecline, walletIsNotAvailable, missingCollateral, errors };
