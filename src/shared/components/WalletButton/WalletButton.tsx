import { useOffchain } from 'shared/helpers/hooks';

import { Button } from '..';

const WalletButton = () => {
  const offchain = useOffchain();

  return (
    <div>
      <Button
        onClick={() => {
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
