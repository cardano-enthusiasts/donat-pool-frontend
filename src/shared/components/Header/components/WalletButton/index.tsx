'use client';

import { useState } from 'react';

import { ConnectWalletModal } from '@/shared/components';
import { useCardano } from '@/shared/hooks';
import Donut2Image from '@public/images/donut-2.svg';

function WalletButton() {
  const { initialized, connectedWalletCardanoKey, disconnectWallet } = useCardano();
  const [modalIsShown, setModalIsShown] = useState(false);

  function handleConnectWalletButtonClick() {
    setModalIsShown(true);
  }

  function handleWalletConnect() {
    setModalIsShown(false);
  }

  return initialized ? (
    <>
      {connectedWalletCardanoKey ? (
        <button type="button" onClick={disconnectWallet}>
          Disconnect wallet
        </button>
      ) : (
        <button type="button" onClick={handleConnectWalletButtonClick}>
          Connect wallet
        </button>
      )}
      {modalIsShown && <ConnectWalletModal onWalletConnect={handleWalletConnect} />}
    </>
  ) : (
    <Donut2Image className="w-10" />
  );
}

export default WalletButton;
