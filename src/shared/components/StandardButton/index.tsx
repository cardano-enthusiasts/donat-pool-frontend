import cn from 'classnames';
import Link from 'next/link';

import VARIANTS from './constants';
import styles from './styles.module.css';
import type { Props } from './types';

function StandardButton({
  children,
  primaryColor,
  secondaryColor,
  fontColor,
  isFullWidth = false,
  type = 'button',
  href = null,
  external = false,
  size = 'm',
  disabled = false,
  animated = false,
  onClick,
}: React.PropsWithChildren<Props>) {
  const classes = cn(
    styles.common,
    VARIANTS.size[size],
    VARIANTS.primary[primaryColor],
    VARIANTS.secondary[secondaryColor],
    VARIANTS.font[fontColor],
    { 'animate-standardPush before:animate-standardPushBefore': animated },
    'disabled:bg-purple',
    'disabled:before:bg-black',
    { 'w-full': isFullWidth },
  );

  return (
    <div className={cn('transition-all duration-500', { 'w-full': isFullWidth })}>
      {href !== null ? (
        <Link
          href={href}
          target={external ? '_blank' : '_self'}
          rel={external ? 'noreferrer' : undefined}
          className={classes}
        >
          {children}
        </Link>
      ) : (
        <button className={classes} disabled={disabled} type={type} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
}

export default StandardButton;
