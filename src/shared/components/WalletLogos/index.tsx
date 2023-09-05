import EternlLogo from '@public/icons/eternl.svg';
import FlintLogo from '@public/icons/flint.svg';
import LodeLogo from '@public/icons/lode.svg';
import NamiLogo from '@public/icons/nami.svg';

import type { Props } from './types';

function WalletLogos({ cardanoKey }: Props) {
  const logos = {
    nami: <NamiLogo />,
    LodeWallet: <LodeLogo />,
    flint: <FlintLogo />,
    eternl: <EternlLogo />,
  };

  return <div className="w-8">{logos[cardanoKey]}</div>;
}

export default WalletLogos;
