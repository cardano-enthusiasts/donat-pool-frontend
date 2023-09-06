import tutorial1 from '@public/gifs/nami-wallet-connection-tutorial-1.gif';
import tutorial2 from '@public/gifs/nami-wallet-connection-tutorial-2.gif';
import tutorial3 from '@public/gifs/nami-wallet-connection-tutorial-3.gif';

const DATA = [
  {
    order: '01.',
    title: 'Wallet creation',
    src: tutorial1,
    description: [
      'Open Google Chrome/Chromium/Brave/Edge browser.',
      'Install the Nami Wallet extension from <a href="https://namiwallet.io/" target="_blank" rel="noreferrer">https://namiwallet.io/.</a>',
      'Open the installed extension and click "New wallet", read and accept the "terms of use".',
      'Nami wallet will show a seed phrase for your wallet, we recommend that you  write it down and store it in a secure place.',
      'At the next step Nami will check if you remember the seed phrase. Use your record to enter the missing words in your seed phrase.',
      "The last thing is to create an account. Please, don't forget to use a strong password for your account!",
      'Now you have a wallet and you can use it with the Nami wallet extension.',
    ],
  },
  {
    order: '02.',
    title: 'Replenishment via Faucet',
    src: tutorial2,
    description: [
      "After you've created the wallet, it has a zero balance.",
      'Click the account icon and go to Settings → Network. Choose Preprod here.',
      'Then go to the main extension page, click "Receive" and copy the address of your wallet.',
      'Go to <a href="https://docs.cardano.org/cardano-testnet/tools/faucet/" target="_blank" rel="noreferrer">https://docs.cardano.org/cardano-testnet/tools/faucet/</a> website.',
      'On the faucet page change "Environment" to "Preprod", and paste your address to the "Address" field. Go through the CAPTCHA verification and click "Request funds".',
      'After some time your wallet will receive 10 000 TADA (Test Ada).',
    ],
  },
  {
    order: '03.',
    title: 'Adding collateral',
    src: tutorial3,
    description: [
      'To start spending TADA in transactions your wallet should have collateral.',
      'Click the account icon and go to "Collateral". Enter your account password and click "Confirm" to lock 5 ADA as collateral.',
      'Your wallet is ready to work with DonatPool and other Cardano services in preprod!',
    ],
  },
];

export { DATA };
