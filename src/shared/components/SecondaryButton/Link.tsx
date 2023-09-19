import NextLink from 'next/link';

import { createButtonClassName } from './helpers';
import type { LinkProps } from './types';

function Link({
  children,
  stretchy,
  size,
  withIcon,
  borderColor,
  textColor,
  shadowColor,
  external = false,
  href,
}: LinkProps) {
  const Link = external ? 'a' : NextLink;

  return (
    <Link
      className={createButtonClassName({
        stretchy,
        size,
        withIcon,
        borderColor,
        textColor,
        shadowColor,
      })}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {children}
    </Link>
  );
}

export default Link;
