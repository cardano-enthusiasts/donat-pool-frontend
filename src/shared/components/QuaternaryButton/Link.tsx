import NextLink from 'next/link';

import {
  createCommonWrapperClassName,
  createCommonInnerWrapperClassName,
  createCommonButtonClassName,
} from './helpers';
import type { LinkProps } from './types';

function Link({ children, stretchy, backgroundTheme, textTheme, animated, external = false, href }: LinkProps) {
  const Link = external ? 'a' : NextLink;

  return (
    <div className={createCommonWrapperClassName(stretchy)}>
      <div className={createCommonInnerWrapperClassName(animated)}>
        <Link
          className={`${createCommonButtonClassName({
            backgroundTheme,
            textTheme,
            animated,
          })} cursor-pointer`}
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
