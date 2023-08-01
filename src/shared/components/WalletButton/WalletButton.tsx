import { useState } from 'react';

import { useAppSelector } from 'core/hooks';
import { useConnectWallet } from 'shared/helpers/hooks';

import { Address, ConnectButton, Wrapper } from './WalletButton.styled';

const WalletButton = () => {
  const [isAddressShown, setIsAddressShown] = useState(false);
  const connectWallet = useConnectWallet();
  const {
    appInfo: { userInfo },
    wallet: { mode },
  } = useAppSelector((state) => state);

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
        {mode === 'connected' || mode === 'missingCollateral'
          ? 'Wallet connected'
          : 'Connect wallet'}
      </ConnectButton>
      {userInfo?.address && isAddressShown && (
        <Address>{`${String(userInfo.address.substring(
          0,
          6,
        ))} ... ${String(userInfo.address.substring(
          userInfo.address.length - 4,
        ))}`}</Address>
      )}
    </Wrapper>
  );
};

export { WalletButton };
