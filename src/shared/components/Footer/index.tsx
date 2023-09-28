import cn from 'classnames';
import Link from 'next/link';

import { ContactUsButton } from './components';
import { SOCIALS, LINKS } from './constants';
import type { Props } from './types';

function Footer({ theme = 'blue' }: Props) {
  return (
    <footer
      className={cn(`pb-15 pt-10 max-md:py-6`, {
        'bg-blue': theme === 'blue',
        'bg-black': theme === 'black',
      })}
    >
      <div
        className="mx-auto
          grid
          w-full
          max-w-screen-fhd
          grid-cols-[auto_1fr_auto]
          items-center
          gap-x-30 
          px-20
          max-md:grid-cols-1
          max-md:justify-items-center
          max-md:gap-y-7
          max-md:px-8"
      >
        <ul className="flex gap-x-10">
          {SOCIALS.map(({ logo, href }) => (
            <li className="shrink-0" key={href}>
              <Link href={href} target="_blank" rel="noreferrer">
                {logo}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-x-10 max-md:flex-col max-md:gap-y-3">
          {LINKS.map(({ title, href }) => (
            <li className="font-rammetto-one text-menu-default text-white max-md:text-center" key={title}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
        <ContactUsButton />
      </div>
    </footer>
  );
}

export default Footer;
