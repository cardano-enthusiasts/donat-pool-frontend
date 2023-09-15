import NextLink from 'next/link';

import { createWrapperClassName, createButtonClassName } from './helpers';
import type { LinkProps } from './types';

function Link({
  children,
  stretchy,
  size,
  platformBackgroundTheme,
  backgroundTheme,
  textTheme,
  animated,
  external = false,
  href,
}: LinkProps) {
  const Link = external ? 'a' : NextLink;

  return (
    <div className={createWrapperClassName({ stretchy, platformBackgroundTheme })}>
      <Link
        className={createButtonClassName({
          size,
          backgroundTheme,
          textTheme,
          animated,
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
