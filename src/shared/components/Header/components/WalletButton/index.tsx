'use client';

import { useState } from 'react';

import { ConnectWalletModal } from '@/shared/components';
import { useConnectedWallet } from '@/shared/hooks';

function WalletButton() {
  const { cardanoKey, disconnectWallet } = useConnectedWallet();
  const [modalIsShown, setModalIsShown] = useState(false);

  function handleConnectWalletButtonClick() {
    setModalIsShown(true);
  }

  function handleWalletConnect() {
    setModalIsShown(false);
  }

  return (
    <>
      {cardanoKey ? (
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
  );
}

export default WalletButton;
