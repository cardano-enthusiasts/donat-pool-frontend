import { LOGOS } from './constants';
import type { Props } from './types';

function WalletLogo({ cardanoKey }: Props) {
  return <div className="w-8">{LOGOS[cardanoKey]}</div>;
}

export default WalletLogo;
