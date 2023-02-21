import { useOffchain } from 'shared/hooks/useOffchain';

import Button from '../Button/Button';

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
