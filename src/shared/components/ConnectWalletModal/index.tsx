'use client';

import cn from 'classnames';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { Modal, Checkbox, WalletLogo, SecondaryLink, SecondaryButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useCardano } from '@/shared/hooks';
import type { WalletCardanoKey } from '@/shared/types';
import GoToIcon from '@public/icons/go-to.svg';

import { WALLETS } from './constants';
import type { Props } from './types';

function ConnectWalletModal({ onWalletConnect, onClose }: Props) {
  const { connectWallet } = useCardano();

  const sortedWallets = useMemo(
    () =>
      WALLETS.map(({ cardanoKey, title, websiteUrl }) => ({
        // hasOwn ensures that "cardano" is present in "window"
        installed: Object.hasOwn(window, 'cardano') && Object.hasOwn(window.cardano!, cardanoKey),
        cardanoKey,
        title,
        websiteUrl,
      })).sort((firstWallet, secondWallet) => (firstWallet.installed && !secondWallet.installed ? -1 : 1)),
    [],
  );
  const [termsOfUseAreAccepted, setTermsOfUseAreAccepted] = useState(false);
  const [someWalletIsBeingConnected, setSomeWalletIsBeingConnected] = useState(false);

  function handleCheckboxChange() {
    setTermsOfUseAreAccepted(!termsOfUseAreAccepted);
  }

  async function handleConnectWalletButtonClick(walletCardanoKey: WalletCardanoKey) {
    setSomeWalletIsBeingConnected(true);

    try {
      const walletApi = await window.cardano?.[walletCardanoKey]?.enable();

      // catching connection cancelling of Lode wallet. For some reason it does not throw an error in this case
      if (walletCardanoKey === 'LodeWallet' && walletApi === undefined) {
        throw new Error('LodeWallet: connection cancelling');
      }

      connectWallet(walletCardanoKey);
      onWalletConnect?.();
    } catch (error) {
      console.error(error);
    }

    setSomeWalletIsBeingConnected(false);
  }

  return (
    <Modal panelTheme="black" title="Connect wallet" titleAs="h1" onClose={onClose}>
      <Checkbox checked={termsOfUseAreAccepted} onChange={handleCheckboxChange}>
        By checking this box and connecting my wallet, I confirm that I have read, understood and agreed the{' '}
        <Link className="font-bold text-blue" href={ROUTES.termsOfUse} target="_blank">
          Terms of use.
        </Link>
      </Checkbox>
      <ul className="mb-10 mt-6 space-y-6">
        {sortedWallets.map(({ installed, cardanoKey, title, websiteUrl }, index, array) => {
          const nextWalletFirstNotInstalled = installed && array.at(index + 1)?.installed === false;

          return (
            <li
              className={cn('flex items-center justify-between gap-x-3 text-gray-secondary', {
                'border-b border-b-gray-secondary/40 pb-6': nextWalletFirstNotInstalled,
              })}
              key={cardanoKey}
            >
              <button
                className="flex items-center gap-x-3"
                type="button"
                disabled={!installed || !termsOfUseAreAccepted || someWalletIsBeingConnected}
                onClick={() => {
                  void handleConnectWalletButtonClick(cardanoKey);
                }}
              >
                <WalletLogo cardanoKey={cardanoKey} />
                <div className="text-xl font-bold">{title}</div>
              </button>
              {installed ? (
                'Installed'
              ) : (
                <div className="flex items-center gap-x-3">
                  Not Installed{' '}
                  <a href={websiteUrl} target="_blank" rel="noreferrer">
                    <GoToIcon />
                  </a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {onClose ? (
        <SecondaryButton stretchy size="lg" textColor="blue" onClick={onClose}>
          Cancel
        </SecondaryButton>
      ) : (
        <SecondaryLink stretchy size="lg" textColor="blue" href={ROUTES.home}>
          Back to Home page
        </SecondaryLink>
      )}
    </Modal>
  );
}

export default ConnectWalletModal;
