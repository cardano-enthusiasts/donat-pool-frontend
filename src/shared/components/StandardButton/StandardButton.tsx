import classNames from 'classnames';
import Link from 'next/link';

import { isLinkExternal } from '@/shared/helpers';

import variants from './constants';
import styles from './StandardButton.module.css';
import { Props } from './types';

const StandardButton = ({
  onClick,
  children,
  primaryColor,
  secondaryColor,
  fontColor,
  isFullWidth = false,
  type = 'button',
  href = null,
  size = 'm',
  isDisabled = false,
  isAnimation = false,
}: Props) => {
  const classes = classNames(
    styles.common,
    variants.size[size],
    variants.primary[primaryColor],
    variants.secondary[secondaryColor],
    variants.font[fontColor],
    { 'animate-standardPush before:animate-standardPushBefore': isAnimation },
    'disabled:bg-purple',
    'disabled:before:bg-black',
    { 'w-full': isFullWidth },
  );

  return (
    <div className={classNames('transition-all duration-500', { 'w-full': isFullWidth })}>
      {href !== null ? (
        <Link
          href={href}
          target={isLinkExternal(href) ? '_blank' : '_self'}
          rel={isLinkExternal(href) ? 'noreferrer' : undefined}
          className={classes}
        >
          {children}
        </Link>
      ) : (
        <button className={classes} onClick={onClick} disabled={isDisabled} type={type}>
          {children}
        </button>
      )}
    </div>
  );
};

export { StandardButton };
