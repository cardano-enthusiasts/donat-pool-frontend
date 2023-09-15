import NextLink from 'next/link';

import { createWrapperClassName, createButtonClassName } from './helpers';
import type { LinkProps } from './types';

function Link({
  children,
  stretchy,
  size,
  withIcon,
  platformBorderTheme,
  borderTheme,
  backgroundTheme,
  textTheme,
  external = false,
  href,
}: LinkProps) {
  const Link = external ? 'a' : NextLink;

  return (
    <div className={createWrapperClassName({ stretchy, platformBorderTheme })}>
      <Link
        className={createButtonClassName({
          size,
          withIcon,
          borderTheme,
          backgroundTheme,
          textTheme,
        })}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </Link>
    </div>
  );
}

export default Link;
