import NextLink from 'next/link';

import { createCommonClassName } from './helpers';
import type { LinkProps } from './types';

function Link({
  children,
  stretchy,
  size,
  withIcon,
  borderTheme,
  textTheme,
  shadowTheme,
  external = false,
  href,
}: LinkProps) {
  const Link = external ? 'a' : NextLink;

  return (
    <Link
      className={`${createCommonClassName({
        size,
        withIcon,
        stretchy,
        borderTheme,
        textTheme,
        shadowTheme,
      })} cursor-pointer`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
    </Link>
  );
}

export default Link;
