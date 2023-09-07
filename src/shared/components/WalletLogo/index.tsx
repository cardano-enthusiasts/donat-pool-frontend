import { LOGOS } from './constants';
import type { Props } from './types';

function WalletLogo({ cardanoKey }: Props) {
  // Svgr doesn't provide types for svg components
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Logo = LOGOS[cardanoKey];

  return <Logo className="w-8" />;
}

export default WalletLogo;
