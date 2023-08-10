import { useState } from 'react';

import { testnetNami } from '@/shared/constants';
import { useDonatPool } from '@/shared/hooks';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  setRequestStatus as setConnectWalletStatus,
  setError as setConnectWalletError,
} from '@/store/slices/connectWallet';

import { Address, ConnectButton, Wrapper } from './WalletButton.styled';

const WalletButton = () => {
  const donatPool = useDonatPool();
  const userInfo = useAppSelector((state) => state.appInfo.userInfo);
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);
  const dispatch = useAppDispatch();
  const [isAddressShown, setIsAddressShown] = useState(false);
  const walletConnected = connectWalletStatus === 'success';

  const handleWalletConnectSuccess = () => {
    dispatch(setConnectWalletStatus('success'));
  };

  const handleWalletConnectFailure = (error: string) => {
    console.error('connectWallet:', error);
    dispatch(setConnectWalletError(error));
  };

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
          if (!walletConnected) {
            donatPool?.connectWallet(handleWalletConnectSuccess)(handleWalletConnectFailure)(testnetNami)();
          }
        }}
      >
        {walletConnected ? 'Wallet connected' : 'Connect wallet'}
      </ConnectButton>
      {userInfo?.address && isAddressShown && (
        <Address>{`${String(userInfo.address.substring(0, 6))} ... ${String(
          userInfo.address.substring(userInfo.address.length - 4),
        )}`}</Address>
      )}
    </Wrapper>
  );
};

export { WalletButton };
