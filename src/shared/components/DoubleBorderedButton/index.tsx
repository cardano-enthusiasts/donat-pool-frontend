import cn from 'classnames';
import Link from 'next/link';

import VARIANTS from './constants';
import styles from './styles.module.css';
import type { Props } from './types';

function DoubleBorderedButton({
  children,
  primaryColor,
  backgroundColor,
  href = null,
  external = false,
  isFullWidth = false,
  size = 'm',
  disabled,
  onClick,
}: React.PropsWithChildren<Props>) {
  const classes = cn(
    styles.common,
    VARIANTS.size[size],
    VARIANTS.primary[primaryColor],
    VARIANTS.background[backgroundColor],
    { 'w-full inline-block': isFullWidth },
    'border-2 before:border-2',
  );

  return (
    <div className={cn('transition-all duration-500', { 'w-full': isFullWidth })}>
      {href !== null ? (
        <Link
          className={classes}
          href={href}
          target={external ? '_blank' : '_self'}
          rel={external ? 'noreferrer' : undefined}
        >
          {children}
        </Link>
      ) : (
        <button className={classes} type="button" disabled={disabled} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
}

export default DoubleBorderedButton;
