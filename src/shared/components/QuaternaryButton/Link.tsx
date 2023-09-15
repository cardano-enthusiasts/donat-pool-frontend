import NextLink from 'next/link';

import {
  createWrapperCommonClassName,
  createInnerWrapperCommonClassName,
  createButtonCommonClassName,
} from './helpers';
import type { LinkProps } from './types';

function Link({
  children,
  size,
  stretchy,
  platformTheme,
  backgroundTheme,
  textTheme,
  animated,
  external = false,
  href,
}: LinkProps) {
  const Link = external ? 'a' : NextLink;

  return (
    <div className={createWrapperCommonClassName({ stretchy })}>
      <div className={createInnerWrapperCommonClassName({ platformTheme, animated })}>
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
    </div>
  );
}

export default Link;
