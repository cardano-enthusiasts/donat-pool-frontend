import cn from 'classnames';
import Link from 'next/link';

import GithubLogo from '@public/icons/github.svg';
import TwitterLogo from '@public/icons/twitter.svg';

import ContactUsButton from './components/ContactUsButton';
import { LINKS } from './constants';
import type { Props } from './types';

function Footer({ theme = 'blue' }: Props) {
  const socials = [
    {
      logo: <GithubLogo />,
      href: 'https://github.com/fullstack-development',
    },
    {
      logo: <TwitterLogo />,
      href: 'https://twitter.com/DonatPool',
    },
  ];

  return (
    <footer
      className={cn(
        `grid
        grid-cols-[auto_1fr_auto]
        items-center
        gap-x-30
        px-20
        pb-15
        pt-10
        max-md:grid-cols-1
        max-md:justify-items-center
        max-md:gap-y-7
        max-md:px-8
        max-md:py-6`,
        {
          'bg-blue': theme === 'blue',
          'bg-black': theme === 'black',
        },
      )}
    >
      <ul className="flex gap-x-10">
        {socials.map(({ logo, href }) => (
          <li className="shrink-0" key={href}>
            <Link href={href} target="_blank" rel="noreferrer">
              {logo}
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
    </footer>
  );
}

export default Footer;
