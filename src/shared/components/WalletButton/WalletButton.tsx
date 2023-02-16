import { useEffect, useState } from 'react';

import Button from '../Button/Button';
declare global {
  interface Window {
    offchain: any;
  }
}
const WalletButton = () => {
  const startProtocolParams = {
    minAmountParam: 50000000,
    maxAmountParam: 1000000000,
    minDurationParam: 100,
    maxDurationParam: 1000,
    protocolFeeParam: 10,
  };
  const [offchain, setOffchain] = useState<Window['offchain']>();
  useEffect(() => {
    console.log(window.offchain);
    if (window.offchain) {
      window.offchain.then(setOffchain);
    }
  }, []);

  const [protocol, setProtocol] = useState();
  useEffect(() => {
    console.log(offchain);
  }, [offchain]);

  const onStartProtocolComplete = (completedProtocol) => {
    setProtocol(completedProtocol);
    console.log('completed protocol', completedProtocol);
  };
  return (
    <div>
      <Button
        onClick={() => {
          console.log(
            offchain.startProtocol(onStartProtocolComplete)(console.log)(
              startProtocolParams
            )()
          );

          offchain?.startProtocol(onStartProtocolComplete)(console.log)(
            console.log
          )();
        }}
        size="s"
      >
        Connect wallet
      </Button>
    </div>
  );
};

export { WalletButton };
