'use client';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { ContactUsButton } from './components';
import { SOCIALS, LINKS } from './constants';
import { Props } from './types';

function Footer({ theme = 'light' }: Props) {
  return (
    <footer
      className={cn({
        'bg-blue': theme === 'light',
        'bg-black': theme === 'dark',
      })}
    >
      <div
        className="
          mx-auto
          grid
          max-w-screen-3xl
          grid-cols-[auto_1fr_auto]
          items-center
          gap-x-30
          px-20
          pb-15
          pt-10
          max-lg:gap-x-10
          max-md:grid-cols-1
          max-md:justify-items-center
          max-md:gap-y-7
          max-sm:px-8
          max-sm:py-6
        "
      >
        <ul className="flex gap-x-10">
          {SOCIALS.map(({ logoSrc, logoAlt, href }) => (
            <li className="shrink-0" key={href}>
              <Link href={href} target="_blank" rel="noreferrer">
                <Image src={logoSrc} alt={logoAlt} />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-x-10 max-md:block">
          {LINKS.map(({ title, href }) => (
            <li className="max-md:text-center" key={title}>
              <Link className="font-rammetto-one text-menu-default text-white" href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <ContactUsButton />
      </div>
    </footer>
  );
}

export default Footer;
