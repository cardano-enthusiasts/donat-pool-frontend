import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { useAppDispatch } from '@/redux/hooks';
import { setActiveWalletCardanoKey } from '@/redux/slices/cardano';
import { Modal, Checkbox, DoubleBorderedButton } from '@/shared/components';
import { ROUTES, WALLET_CARDANO_KEY_TO_LOGO } from '@/shared/constants';
import { WalletCardanoKey } from '@/shared/types';
import goToIcon from '@public/icons/go-to.svg';

import { WALLETS } from './constants';

function ConnectWalletModal() {
  const dispatch = useAppDispatch();
  const sortedWallets = useMemo(
    () =>
      WALLETS.map(({ cardanoKey, title, websiteUrl }) => ({
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
    setTermsOfUseAreAccepted((t) => !t);
  }

  async function handleConnectWalletButtonClick(walletCardanoKey: WalletCardanoKey) {
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
  }

  return (
    <Modal shown panelTheme="dark" title="Connect wallet" titleAs="h1">
      <Checkbox checked={termsOfUseAreAccepted} textTheme="light" onChange={handleCheckboxChange}>
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
                <div className="w-8">
                  <Image
                    className="mx-auto"
                    src={WALLET_CARDANO_KEY_TO_LOGO[cardanoKey]}
                    alt={`${title}'s logo`}
                    role="img"
                  />
                </div>
                <div className="text-xl font-bold">{title}</div>
              </button>
              {installed ? (
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
          );
        })}
      </ul>
      <DoubleBorderedButton primaryColor="blue" backgroundColor="black" isFullWidth href={ROUTES.home}>
        Back to Home page
      </DoubleBorderedButton>
    </Modal>
  );
}

export default ConnectWalletModal;
