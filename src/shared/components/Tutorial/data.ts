const data = [
  {
    order: '01.',
    title: 'Wallet creation',
    src: 'tutorial-1.gif',
    description: [
      'Open Google Chrome/Chromium/Brave/Edge browser.',
      'Install Nami Wallet extension from <a href="https://namiwallet.io/" target="_blank" rel="noreferrer">https://namiwallet.io/.</a>',
      'Open the installed extension and click &#34;New wallet&#34;, read and accept the &#34;terms of use&#34;.',
      'Nami wallet will show the seed phrase for your wallet, we recommend you to write it down and store it in a secure place.',
      'On the next step Nami will check if you remember the seed phrase, use your record to populate the missing words in your seed phrase.',
      'The last thing is to create an account - don&#39;t forget to use a strong password for your account!',
      'Now you have a wallet and can use it in the Nami wallet extension.',
    ],
  },
  {
    order: '02.',
    title: 'Replenishment via Faucet',
    src: 'tutorial-2.gif',
    description: [
      'After creation the wallet has zero balance.',
      'Click the account icon and go to Settings &#8594 Network. Choose Preprod here.',
      'Then go to the main extension page, click &#34;Receive&#34; and copy the address of your wallet.',
      'Go to <a href="https://docs.cardano.org/cardano-testnet/tools/faucet/" target="_blank" rel="noreferrer">https://docs.cardano.org/cardano-testnet/tools/faucet/</a> website.',
      'On the faucet page change &#34;Environment&#34; to &#34;Preprod&#34;, and paste your address to the &#34;Address&#34; field. Go through the CAPTCHA verification and click &#34;Request funds&#34;.',
      'After some time your wallet will receive 10 000 TADA (Test Ada).',
    ],
  },
  {
    order: '03.',
    title: 'Adding a collateral',
    src: 'tutorial-3.gif',
    description: [
      'To start spending TADA in transactions your wallet should have collateral.',
      'Click the account icon and go to &#34;Collateral&#34;. Enter the password of your account and click &#34;Confirm&#34; to lock 5 ADA as collateral.',
      'Your wallet is ready to work with DonatPool and another Cardano services in preprod!',
    ],
  },
];

export { data };
