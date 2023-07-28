import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useConnectWallet } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { Address, ConnectButton, Wrapper } from './WalletButton.styled';

const WalletButton = () => {
  const [isAddressShown, setIsAddressShown] = useState(false);
  const connectWallet = useConnectWallet();
  const { address } = useSelector(
    (state: AppReduxState) => state.info.data.user,
  );
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data,
  );
  return (
    <Wrapper
      onMouseEnter={() => {
        setIsAddressShown(true);
      }}
      onMouseLeave={() => {
        setIsAddressShown(false);
      }}
    >
      <ConnectButton
        onClick={() => {
          connectWallet();
        }}
      >
        {walletStatus === 'connected' || walletStatus === 'missingCollateral'
          ? 'Wallet connected'
          : 'Connect wallet'}
      </ConnectButton>
      {address && isAddressShown && (
        <Address>{`${address.substring(0, 6)} ... ${address.substring(
          address.length - 4,
        )}`}</Address>
      )}
    </Wrapper>
  );
};

export { WalletButton };
