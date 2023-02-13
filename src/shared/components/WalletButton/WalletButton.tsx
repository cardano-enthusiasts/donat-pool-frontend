import { useEffect, useState } from 'react';

import Button from '../Button/Button';
declare global {
  interface Window {
    offchain: any;
  }
}
const WalletButton = () => {
  const [offchain, setOffchain] = useState<Window['offchain']>();
  useEffect(() => {
    console.log(window.offchain);
    if (window.offchain) {
      window.offchain.then(setOffchain);
    }
  }, []);
  return (
    <div>
      <Button
        onClick={() => {
          console.log(offchain);

          offchain?.connectWallet();
        }}
        size="s"
      >
        Connect wallet
      </Button>
    </div>
  );
};

export { WalletButton };
