'use client';

import cn from 'classnames';
// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLockBodyScroll } from 'react-use';
// import { useState } from 'react';

import { Logo } from '@/shared/components';
import MenuIcon from '@public/icons/menu.svg';

import { WalletButton } from './components';
import { LINKS } from './constants';

function Header() {
  const pathname = usePathname();
  const [menuIsShown, setMenuIsShown] = useState(false);
  useLockBodyScroll(menuIsShown);

  function handleMenuButtonClick() {
    setMenuIsShown(!menuIsShown);
  }

  return (
    <header
      className={cn('flex flex-wrap items-center justify-between gap-x-10 bg-red px-20 py-8 max-md:px-8 max-md:py-6', {
        'fixed inset-0 z-[1]': menuIsShown,
      })}
    >
      <Logo />
      <div
        className={cn('flex flex-wrap items-center gap-x-10 justify-self-end', {
          'max-md:hidden': !menuIsShown,
          'order-1 w-full': menuIsShown,
        })}
      >
        <nav className="border-r-2 border-r-purple pr-10">
          <ul className="flex flex-wrap gap-x-10">
            {LINKS.map(({ title, href }) => (
              <li className={`text-lg/6 font-bold ${href === pathname ? 'text-yellow' : 'text-white'}`} key={title}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="shrink-0">
          <WalletButton />
        </div>
      </div>
      <button className="hidden h-8 w-8 max-md:inline-block" type="button" onClick={handleMenuButtonClick}>
        <MenuIcon className="[&>path]:fill-green" />
      </button>
      {/* {activeWalletCardanoKey ? (
        <div className={cn('flex max-lg:flex-col max-lg:gap-10', { 'max-lg:hidden': !menuIsShown })}>
          <div className="mx-10 flex gap-7 text-lg font-bold max-lg:flex-col max-lg:items-center">
            {LINKS.map(({ title, href }) => (
              <div className="shrink-0" key={title}>
                <Link className={`${href === pathname ? 'text-yellow' : 'text-white'}`} href={href}>
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
        <div className={cn({ 'max-lg:hidden': !menuIsShown })}>
          <StandardButton href={ROUTES.newDonatPool} primaryColor="yellow" secondaryColor="blue" fontColor="black">
            Create Donat.Pool
          </StandardButton>
        </div>
      )}
      <Image
        className="hidden max-lg:absolute max-lg:right-[1.875rem] max-lg:top-8 max-lg:block max-lg:h-10 max-lg:w-10"
        onClick={handleCloseIconClick}
      /> */}
    </header>
  );
}

export default Header;
