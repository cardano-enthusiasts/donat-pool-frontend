import cn from 'classnames';

import { LOGOS } from './constants';
import type { Props } from './types';

function WalletLogo({ cardanoKey, size = 'md' }: Props) {
  // Svgr doesn't provide types for svg components
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Logo = LOGOS[cardanoKey];

  return (
    <Logo
      className={cn({
        'w-4': size === 'sm',
        'w-8': size === 'md',
      })}
    />
  );
}

export default WalletLogo;
