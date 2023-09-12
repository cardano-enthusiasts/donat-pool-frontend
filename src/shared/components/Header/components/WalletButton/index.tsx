'use client';

import { useState } from 'react';

import { ConnectWalletModal, SecondaryButton, WalletLogo } from '@/shared/components';
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

  function handleModalClose() {
    setModalIsShown(false);
  }

  return initialized ? (
    <>
      <SecondaryButton
        borderTheme="purple"
        shadowTheme="redPurple"
        withIcon={Boolean(connectedWalletCardanoKey)}
        onClick={connectedWalletCardanoKey ? disconnectWallet : handleConnectWalletButtonClick}
      >
        {connectedWalletCardanoKey ? (
          <>
            <div className="h-6 w-6 rounded-full bg-black p-1">
              <WalletLogo size="sm" cardanoKey={connectedWalletCardanoKey} />
            </div>{' '}
            Disconnect
          </>
        ) : (
          'Connect wallet'
        )}
      </SecondaryButton>
      {modalIsShown && <ConnectWalletModal onWalletConnect={handleWalletConnect} onClose={handleModalClose} />}
    </>
  ) : (
    <Donut2Image className="w-10" />
  );
}

export default WalletButton;
