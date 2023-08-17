import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Modal, Checkbox } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAppSelector } from '@/shared/hooks';

import { WALLET_NAME_TO_IMAGE_SRC, WALLET_NAME_TO_WEBSITE } from './constants';
import goToIcon from '../../../../public/icons/go-to.svg';

const ConnectWalletModal = () => {
  const wallets = useAppSelector((state) => state.cardano.wallets);
  const [termsOfUseAccepted, setTermsOfUseAccepted] = useState(false);
  const [someWalletIsBeingConnected, setSomeWalletIsBeingConnected] = useState(false);

  return (
    <Modal open title="Connect wallet" titleAs="h1">
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
        {wallets?.map(({ cardanoKey, name, installed }) => {
          const canBeConnected = installed && termsOfUseAccepted && !someWalletIsBeingConnected;

          return (
            <li className="flex items-center justify-between gap-x-3 text-gray-secondary" key={name}>
              <button
                className={cn('flex items-center gap-x-3', {
                  'cursor-default': !canBeConnected,
                })}
                type="button"
                onClick={async () => {
                  if (canBeConnected) {
                    setSomeWalletIsBeingConnected(true);

                    try {
                      await window?.cardano?.[cardanoKey]?.enable();
                      location.reload();
                    } catch (error) {
                      console.error(error);
                    }

                    setSomeWalletIsBeingConnected(false);
                  }
                }}
              >
                <div className="w-8">
                  <Image className="mx-auto" src={WALLET_NAME_TO_IMAGE_SRC[name]} alt={`${name}'s logo`} role="img" />
                </div>
                <div className="text-xl font-bold">{name}</div>
              </button>
              {installed ? (
                'Installed'
              ) : (
                <div className="flex items-center gap-x-3">
                  Not Installed{' '}
                  <a href={WALLET_NAME_TO_WEBSITE[name]} target="_blank" rel="noreferrer">
                    <Image src={goToIcon} alt={`link to ${name}'s website`} role="img" />
                  </a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <Link href={ROUTES.home}>Back to Home page</Link>
    </Modal>
  );
};

export default ConnectWalletModal;
