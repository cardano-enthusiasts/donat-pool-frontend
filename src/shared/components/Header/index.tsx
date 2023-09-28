'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLockBodyScroll } from 'react-use';

import { Logo } from '@/shared/components';
import CloseIcon from '@public/icons/close.svg';
import MenuIcon from '@public/icons/menu.svg';

import { WalletButton } from './components';
import { LINKS } from './constants';

function Header() {
  const pathname = usePathname();
  const [menuIsShown, setMenuIsShown] = useState(false);
  useLockBodyScroll(menuIsShown);
  // Svgr doesn't provide types for svg components
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const MenuToggleIcon = menuIsShown ? CloseIcon : MenuIcon;

  function handleMenuButtonClick() {
    setMenuIsShown(!menuIsShown);
  }

  return (
    <header
      className={cn('bg-red', {
        'fixed inset-0 z-10': menuIsShown,
      })}
    >
      <div className="mx-auto max-w-screen-fhd px-20 py-8 max-md:px-8 max-md:py-6">
        <div className="flex flex-wrap items-center justify-between gap-x-10 max-md:gap-y-15">
          <Logo />
          <div
            className={cn(
              'flex flex-wrap gap-x-10 max-md:order-1 max-md:w-full max-md:flex-col max-md:gap-y-10 md:items-center',
              {
                'max-md:hidden': !menuIsShown,
              },
            )}
          >
            <nav
              className="max-md:border-b-2
              max-md:border-b-purple
              max-md:pb-10
              md:border-r-2
              md:border-r-purple
              md:pr-10"
            >
              <ul className="flex flex-wrap gap-x-10 max-md:flex-col max-md:gap-y-10">
                {LINKS.map(({ title, href }) => (
                  <li
                    className={`text-lg/6 font-bold max-md:text-2xl/6 ${
                      href === pathname ? 'text-yellow' : 'text-white'
                    }`}
                    key={title}
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <WalletButton />
            </div>
          </div>
          <button className="h-8 w-8 md:hidden" type="button" onClick={handleMenuButtonClick}>
            <MenuToggleIcon className="[&>path]:fill-green" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
