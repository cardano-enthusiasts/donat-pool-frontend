import cn from 'classnames';
import Link from 'next/link';

import VARIANTS from './constants';
import styles from './DoubleBorderedButton.module.css';
import { Props } from './types';

function DoubleBorderedButton({
  children,
  primaryColor,
  backgroundColor,
  href = null,
  isExternal = false,
  isFullWidth = false,
  size = 'm',
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
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noreferrer' : undefined}
        >
          {children}
        </Link>
      ) : (
        <button className={classes} type="button" onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
}

export default DoubleBorderedButton;
