import { useConnectWallet } from 'shared/helpers/hooks';

import { Button } from '..';

const WalletButton = () => {
  const connectWallet = useConnectWallet();

  return (
    <div>
      <Button
        onClick={() => {
          connectWallet();
        }}
        size="s"
      >
        Connect wallet
      </Button>
    </div>
  );
};

export { WalletButton };
