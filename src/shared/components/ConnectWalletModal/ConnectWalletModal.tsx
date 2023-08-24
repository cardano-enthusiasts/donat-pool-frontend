import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { setActiveWalletCardanoKey } from '@/redux/slices/cardano';
import { Modal, Checkbox } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { WALLET_CARDANO_KEY_TO_LOGO } from '@/shared/constants';
import { useAppDispatch } from '@/shared/hooks';
import type { WalletCardanoKey } from '@/shared/types';

import { WALLETS } from './constants';
import goToIcon from '../../../../public/icons/go-to.svg';

const ConnectWalletModal = () => {
  const dispatch = useAppDispatch();

  const sortedWallets = useMemo(
    () =>
      WALLETS.map(({ cardanoKey, title, websiteUrl }) => ({
        isInstalled: Object.hasOwn(window, 'cardano') && Object.hasOwn(window.cardano as any, cardanoKey),
        cardanoKey,
        title,
        websiteUrl,
      })).sort((firstWallet, secondWallet) => (firstWallet.isInstalled && !secondWallet.isInstalled ? -1 : 1)),
    [],
  );
  const [termsOfUseAccepted, setTermsOfUseAccepted] = useState(false);
  const [someWalletIsBeingConnected, setSomeWalletIsBeingConnected] = useState(false);

  const handleConnectWalletButtonClick = async (walletCardanoKey: WalletCardanoKey) => {
    setSomeWalletIsBeingConnected(true);

    try {
      const walletApi = await window.cardano?.[walletCardanoKey]?.enable();

      // WORKAROUND: catching connection cancelling of Lode wallet. For some reason it does not throw an error in this case
      if (walletCardanoKey === 'LodeWallet' && walletApi === undefined) {
        throw new Error('LodeWallet: connection cancelling');
      }

      dispatch(setActiveWalletCardanoKey(walletCardanoKey));
    } catch (error) {
      console.error(error);
    }

    setSomeWalletIsBeingConnected(false);
  };

  return (
    <Modal isOpen title="Connect wallet" titleAs="h1">
      <Checkbox
        isChecked={termsOfUseAccepted}
        onChange={() => {
          setTermsOfUseAccepted((t) => !t);
        }}
      >
        By checking this box and connecting my wallet, I confirm that I have read, understood and agreed the{' '}
        <Link className="font-bold text-blue" href={ROUTES.termsOfUse} target="_blank">
          Terms of use.
        </Link>
      </Checkbox>
      <ul className="mb-10 mt-6 space-y-6">
        {sortedWallets.map(({ isInstalled, cardanoKey, title, websiteUrl }, index, array) => (
          <li
            className={cn('flex items-center justify-between gap-x-3 text-gray-secondary', {
              'border-b border-b-gray-secondary/40 pb-6': isInstalled && array.at(index + 1)?.isInstalled === false,
            })}
            key={cardanoKey}
          >
            <button
              className="flex items-center gap-x-3"
              type="button"
              disabled={!isInstalled || !termsOfUseAccepted || someWalletIsBeingConnected}
              onClick={() => handleConnectWalletButtonClick(cardanoKey)}
            >
              <div className="w-8">
                <Image
                  className="mx-auto"
                  src={WALLET_CARDANO_KEY_TO_LOGO[cardanoKey]}
                  alt={`${name}'s logo`}
                  role="img"
                />
              </div>
              <div className="text-xl font-bold">{title}</div>
            </button>
            {isInstalled ? (
              'Installed'
            ) : (
              <div className="flex items-center gap-x-3">
                Not Installed{' '}
                <a href={websiteUrl} target="_blank" rel="noreferrer">
                  <Image src={goToIcon} alt={`link to ${title}'s website`} role="img" />
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Link href={ROUTES.home}>Back to Home page</Link>
    </Modal>
  );
};

export default ConnectWalletModal;
