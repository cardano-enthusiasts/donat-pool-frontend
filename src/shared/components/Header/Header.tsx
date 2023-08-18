import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useAppSelector } from '@/redux/hooks';
import { ROUTES } from '@/shared/constants';

import type { Props } from './types';
import { Logo, StandardButton, WalletButton } from '..';

const Header = ({ currentPage = null }: Props) => {
  const links = [
    { title: 'My projects', href: ROUTES.userFundraisings, id: 'my-projects' },
    {
      title: 'All Donation pools',
      href: ROUTES.allFundraisings,
      id: 'projects',
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);

  return (
    <header
      className={classNames('base-wrapper bg-red max-lg:relative max-lg:w-screen', {
        'z-[999] min-h-screen pt-36': isMenuOpen,
      })}
    >
      <div
        className={classNames('base-inner flex items-center justify-between px-0 py-8 max-xl:flex-col max-xl:gap-7', {
          'max-lg:items-start': !isMenuOpen,
        })}
      >
        {!isMenuOpen && <Logo />}
        {connectWalletStatus === 'success' ? (
          <div className={classNames('flex max-lg:flex-col max-lg:gap-10', { 'max-lg:hidden': !isMenuOpen })}>
            <div className="mx-10 flex gap-7 text-lg font-bold max-lg:flex-col max-lg:items-center">
              {links.map(({ title, href, id }) => (
                <div className="shrink-0" key={id}>
                  <Link
                    href={href}
                    className={classNames({
                      'text-yellow': href === currentPage,
                      'text-white': href !== currentPage,
                    })}
                  >
                    {title}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mr-10 w-0.5 bg-purple max-lg:h-0.5 max-lg:w-full" />
            <WalletButton />
          </div>
        ) : (
          <div className={classNames({ 'max-lg:hidden': !isMenuOpen })}>
            <StandardButton href={ROUTES.newFundraising} primaryColor="yellow" secondaryColor="blue" fontColor="black">
              Start a fundraiser
            </StandardButton>
          </div>
        )}
      </div>

      <Image
        className="hidden max-lg:absolute max-lg:right-[30px] max-lg:top-8 max-lg:block max-lg:h-10 max-lg:w-10"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        src={`/icons/${isMenuOpen ? 'close' : 'menu'}.svg`}
        alt="close icon"
        width={50}
        height={50}
      />
    </header>
  );
};

export { Header };
