import cn from 'classnames';
import Link from 'next/link';

import VARIANTS from './constants';
import styles from './styles.module.css';
import { type Props } from './types';

function AccentButton({
  children,
  primaryColor,
  secondaryColor,
  fontColor,
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
    'font-rammetto-one',
    VARIANTS.size[size],
    VARIANTS.primary[primaryColor],
    VARIANTS.secondary[secondaryColor],
    VARIANTS.font[fontColor],
    { 'animate-accentPush before:animate-accentPushBefore after:animate-accentPushAfter': animated },
  );

  return (
    <div
      className={cn(
        'w-[19.5rem] pb-[1.375rem] pl-[1.375rem] transition-all duration-500 max-lg:h-30 max-lg:w-[13.875rem]',
        {
          'h-[6.0625rem]': size === 's',
          'h-[9.375rem]': size === 'm',
        },
      )}
    >
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

export default AccentButton;
