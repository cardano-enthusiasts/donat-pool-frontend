import NextLink from 'next/link';

import { createWrapperCommonClassName, createButtonCommonClassName } from './helpers';
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
    <div className={createWrapperCommonClassName({ stretchy, platformBackgroundTheme })}>
      <Link
        className={createButtonCommonClassName({
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
