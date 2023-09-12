import NextLink from 'next/link';

import { createCommonClassName } from './helpers';
import type { LinkProps } from './types';

function Link({
  children,
  size,
  withIcon,
  stretchy,
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
      })} inline-block cursor-pointer`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
    </Link>
  );
}

export default Link;
