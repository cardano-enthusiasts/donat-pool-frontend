import cn from 'classnames';
import Link from 'next/link';

import VARIANTS from './constants';
import styles from './StandardButton.module.css';
import { Props } from './types';

const StandardButton = ({
  children,
  primaryColor,
  secondaryColor,
  fontColor,
  isFullWidth = false,
  type = 'button',
  href = null,
  isExternal = false,
  size = 'm',
  isDisabled = false,
  isAnimation = false,
  onClick,
}: Props) => {
  const classes = cn(
    styles.common,
    VARIANTS.size[size],
    VARIANTS.primary[primaryColor],
    VARIANTS.secondary[secondaryColor],
    VARIANTS.font[fontColor],
    { 'animate-standardPush before:animate-standardPushBefore': isAnimation },
    'disabled:bg-purple',
    'disabled:before:bg-black',
    { 'w-full': isFullWidth },
  );

  return (
    <div className={cn('transition-all duration-500', { 'w-full': isFullWidth })}>
      {href !== null ? (
        <Link
          href={href}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noreferrer' : undefined}
          className={classes}
        >
          {children}
        </Link>
      ) : (
        <button className={classes} disabled={isDisabled} type={type} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
};

export { StandardButton };
