import classNames from 'classnames';
import Link from 'next/link';

import { isLinkExternal } from '@/shared/helpers';

import styles from './DoubleBorderedButton.module.css';
import { Props } from './types';

const DoubleBorderedButton = ({
  onClick,
  children,
  primaryColor,
  backgroundColor,
  href = null,
  isFullWidth = false,
  size = 'm',
}: Props) => {
  const variants = {
    primary: { blue: 'bg-blue text-blue border-blue before:border-blue' },
    background: {
      white: 'bg-yellow',
      red: 'bg-green',
    },
    size: {
      s: 'text-base px-4 py-2.5',
      m: 'text-xl px-5 py-2.5',
    },
  };
  const classes = classNames(
    styles.common,
    variants.size[size],
    variants.primary[primaryColor],
    variants.background[backgroundColor],
    { 'w-full': isFullWidth },
    'border-2 before:border-2',
  );

  return (
    <div className="transition-all duration-500">
      {href !== null ? (
        <Link
          href={href}
          target={isLinkExternal(href) ? '_blank' : '_self'}
          rel={isLinkExternal(href) ? 'noopener noreferrer' : undefined}
          className={classes}
        >
          {children}
        </Link>
      ) : (
        <button className={classes} onClick={onClick} type="button">
          {children}
        </button>
      )}
    </div>
  );
};

export { DoubleBorderedButton };
