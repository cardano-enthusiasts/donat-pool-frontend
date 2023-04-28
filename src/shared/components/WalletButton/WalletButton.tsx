import { useSelector } from 'react-redux';

import { useConnectWallet } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { Button } from '..';

const WalletButton = () => {
  const connectWallet = useConnectWallet();
  const { address } = useSelector(
    (state: AppReduxState) => state.info.data.user
  );

  return (
    <div>
      <Button
        onClick={() => {
          connectWallet();
        }}
        size="s"
        width="160px"
      >
        {address
          ? `${address.substring(0, 4)} ... ${address.substring(
              address.length - 4
            )}`
          : 'Connect wallet'}
      </Button>
    </div>
  );
};

export { WalletButton };
