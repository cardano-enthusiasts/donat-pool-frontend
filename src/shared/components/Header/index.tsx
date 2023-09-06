'use client';

// import cn from 'classnames';
// import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useState } from 'react';

import { Logo } from '@/shared/components';
// import { ROUTES, WALLET_CARDANO_KEY_TO_LOGO } from '@/shared/constants';

import { WalletButton } from './components';
import { LINKS } from './constants';

function Header() {
  const pathname = usePathname();
  // const [menuIsShown, setMenuIsShown] = useState(false);

  // function handleCloseIconClick() {
  //   setMenuIsShown(!menuIsShown);
  // }

  return (
    <header className="grid grid-cols-[auto_1fr] items-center gap-x-10 bg-red px-20 py-8 max-md:px-8 max-md:py-6">
      <Logo />
      <div className="flex items-center gap-x-10 justify-self-end max-md:hidden">
        <nav className="border-r-2 border-r-purple pr-10">
          <ul className="flex gap-x-10">
            {LINKS.map(({ title, href }) => (
              <li className={`text-lg/6 font-bold ${href === pathname ? 'text-yellow' : 'text-white'}`} key={title}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <WalletButton />
      </div>
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
        src={`/icons/${menuIsShown ? 'close' : 'menu'}.svg`}
        alt="close icon"
        width={50}
        height={50}
        onClick={handleCloseIconClick}
      /> */}
    </header>
  );
}

export default Header;
