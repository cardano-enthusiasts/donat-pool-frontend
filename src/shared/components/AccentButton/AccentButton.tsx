import classNames from 'classnames';
import Link from 'next/link';

import { isLinkExternal } from '@/shared/helpers';

import styles from './AccentButton.module.css';
import variants from './constants';
import { Props } from './types';

const AccentButton = ({
  onClick,
  children,
  primaryColor,
  secondaryColor,
  fontColor,
  type = 'button',
  href = null,
  size = 'm',
  isDisabled = false,
  isAnimation = false,
}: Props) => {
  const classes = classNames(
    styles.common,
    'font-rammetto-one',
    variants.size[size],
    variants.primary[primaryColor],
    variants.secondary[secondaryColor],
    variants.font[fontColor],
    { 'animate-accentPush before:animate-accentPushBefore after:animate-accentPushAfter': isAnimation },
  );

  return (
    <div
      className={classNames('max-lg:h-30 w-[290px] pb-[22px] pl-[22px] transition-all duration-500 max-lg:w-40', {
        'h-[97px]': size === 's',
        'h-[150px]': size === 'm',
      })}
    >
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
        <button className={classes} onClick={onClick} disabled={isDisabled} type={type}>
          {children}
        </button>
      )}
    </div>
  );
};

export { AccentButton };
