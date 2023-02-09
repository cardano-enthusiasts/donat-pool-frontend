import { useEffect, useState } from 'react';
declare global {
  interface Window {
    offchain: any;
  }
}
const WalletButton = () => {
  const [offchain, setOffchain] = useState<Window['offchain']>();
  useEffect(() => {
    console.log(window.offchain);
    // if (window.offchain) {
    //   window.offchain.then(setOffchain);
    // }
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          console.log(offchain);

          offchain?.connectWallet();
        }}
      >
        Connect wallet
      </button>
    </div>
  );
};

export { WalletButton };
