import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { setWalletConnectedByName } from '@/redux/slices/cardano';
import { Modal, Checkbox } from '@/shared/components';
import { ROUTES, WALLET_NAME_TO_DATA } from '@/shared/constants';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import type { Wallet } from '@/shared/types';

import goToIcon from '../../../public/icons/go-to.svg';

const ConnectWalletModal = () => {
  const wallets = useAppSelector((state) => state.cardano.wallets);
  const dispatch = useAppDispatch();
  const [termsOfUseAccepted, setTermsOfUseAccepted] = useState(false);
  const [someWalletIsBeingConnected, setSomeWalletIsBeingConnected] = useState(false);

  const handleConnectWalletButtonClick = async (walletName: Wallet['name']) => {
    setSomeWalletIsBeingConnected(true);

    try {
      const walletApi = await window.cardano?.[WALLET_NAME_TO_DATA[walletName].cardanoKey]?.enable();

      // WORKAROUND: catching connection cancelling of Lode wallet. For some reason it does not throw an error in this case
      if (walletName === 'lode' && walletApi === undefined) {
        throw new Error('LodeWallet: connection cancelling');
      }

      dispatch(setWalletConnectedByName(walletName));
    } catch (error) {
      console.error(error);
    }

    setSomeWalletIsBeingConnected(false);
  };

  return (
    <Modal isOpen title="Connect wallet" titleAs="h1">
      <Checkbox
        className="mb-6"
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
      <ul className="mb-10 space-y-6">
        {wallets?.map(({ name, isInstalled }, index, array) => (
          <li
            className={cn('flex items-center justify-between gap-x-3 text-gray-secondary', {
              'border-b border-b-gray-secondary/40 pb-6': isInstalled && array.at(index + 1)?.isInstalled === false,
            })}
            key={name}
          >
            <button
              className="flex items-center gap-x-3"
              type="button"
              disabled={!isInstalled || !termsOfUseAccepted || someWalletIsBeingConnected}
              onClick={() => handleConnectWalletButtonClick(name)}
            >
              <div className="w-8">
                <Image className="mx-auto" src={WALLET_NAME_TO_DATA[name].logo} alt={`${name}'s logo`} role="img" />
              </div>
              <div className="text-xl font-bold">{WALLET_NAME_TO_DATA[name].title}</div>
            </button>
            {isInstalled ? (
              'Installed'
            ) : (
              <div className="flex items-center gap-x-3">
                Not Installed{' '}
                <a href={WALLET_NAME_TO_DATA[name].websiteUrl} target="_blank" rel="noreferrer">
                  <Image src={goToIcon} alt={`link to ${name}'s website`} role="img" />
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
