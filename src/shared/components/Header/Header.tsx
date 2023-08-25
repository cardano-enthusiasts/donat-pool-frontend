'use client';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Logo, StandardButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { WALLET_CARDANO_KEY_TO_LOGO } from '@/shared/constants';
import { useAppSelector } from '@/shared/hooks';

import { LINKS } from './constants';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);

  return (
    <header
      className={cn('base-wrapper bg-red max-lg:relative max-lg:w-screen', {
        'z-[999] min-h-screen pt-36': isMenuOpen,
      })}
    >
      <div
        className={cn('max-w-480 flex w-full items-center justify-between px-0 py-8 max-xl:flex-col max-xl:gap-7', {
          'max-lg:items-start': !isMenuOpen,
        })}
      >
        {!isMenuOpen && <Logo />}
        {activeWalletCardanoKey ? (
          <div className={cn('flex max-lg:flex-col max-lg:gap-10', { 'max-lg:hidden': !isMenuOpen })}>
            <div className="mx-10 flex gap-7 text-lg font-bold max-lg:flex-col max-lg:items-center">
              {LINKS.map(({ title, href }) => (
                <div className="shrink-0" key={title}>
                  <Link href={href} className={`${href === pathname ? 'text-yellow' : 'text-white'}`}>
                    {title}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mr-10 w-0.5 bg-purple max-lg:h-0.5 max-lg:w-full" />
            <Image
              src={WALLET_CARDANO_KEY_TO_LOGO[activeWalletCardanoKey]}
              alt={`${activeWalletCardanoKey}'s logo`}
              role="img"
            />
          </div>
        ) : (
          <div className={cn({ 'max-lg:hidden': !isMenuOpen })}>
            <StandardButton href={ROUTES.newFundraising} primaryColor="yellow" secondaryColor="blue" fontColor="black">
              Create Donat.Pool
            </StandardButton>
          </div>
        )}
      </div>
      <Image
        className="hidden max-lg:absolute max-lg:right-[1.875rem] max-lg:top-8 max-lg:block max-lg:h-10 max-lg:w-10"
        src={`/icons/${isMenuOpen ? 'close' : 'menu'}.svg`}
        alt="close icon"
        width={50}
        height={50}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
    </header>
  );
};

export default Header;
