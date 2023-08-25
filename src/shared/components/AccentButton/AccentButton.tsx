import cn from 'classnames';
import Link from 'next/link';

import styles from './AccentButton.module.css';
import VARIANTS from './constants';
import { Props } from './types';

function AccentButton({
  children,
  primaryColor,
  secondaryColor,
  fontColor,
  type = 'button',
  href = null,
  isExternal = false,
  size = 'm',
  isDisabled = false,
  isAnimation = false,
  onClick,
}: Props) {
  const classes = cn(
    styles.common,
    'font-rammetto-one',
    VARIANTS.size[size],
    VARIANTS.primary[primaryColor],
    VARIANTS.secondary[secondaryColor],
    VARIANTS.font[fontColor],
    { 'animate-accentPush before:animate-accentPushBefore after:animate-accentPushAfter': isAnimation },
  );

  return (
    <div
      className={cn(
        'max-lg:h-30 w-[19.5rem] pb-[1.375rem] pl-[1.375rem] transition-all duration-500 max-lg:w-[13.875rem]',
        {
          'h-[6.0625rem]': size === 's',
          'h-[9.375rem]': size === 'm',
        },
      )}
    >
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
}

export default AccentButton;
