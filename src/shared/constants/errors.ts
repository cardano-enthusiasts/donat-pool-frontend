const walletDisconnect =
  'enableWallet failed: The request was refused due to lack of access - e.g. wallet disconnects.';
const userDecline =
  '{"code":2,"info":"User declined to sign the transaction."}';

let errors = {
  [walletDisconnect]:
    'The request was refused due to lack of access - e.g. wallet disconnects.',
  [userDecline]: 'You declined to sign the transaction.',
};

errors = new Proxy(errors, {
  get(target, backendError) {
    if (backendError in target) {
      return target[backendError];
    } else {
      return backendError;
    }
  },
});

export { errors, walletDisconnect };
