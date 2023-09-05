import type { StaticImageData } from 'next/image';

import eternlLogo from '@public/icons/eternl.png';
import flintLogo from '@public/icons/flint.svg';
import lodeLogo from '@public/icons/lode.svg';
import namiLogo from '@public/icons/nami.svg';

const ROUTES = {
  home: '/',
  homeTutorial: '/#tutorial',
  donatPools: '/donat-pools',
  myDonatPools: '/my-donat-pools',
  newDonatPool: '/new-donat-pool',
  roadmap: '/roadmap',
  faq: '/faq',
  termsOfUse: 'terms-of-use',
  mock: '/mock-address',
} as const;

const WALLET_CARDANO_KEY_TO_LOGO = {
  nami: namiLogo as StaticImageData,
  LodeWallet: lodeLogo as StaticImageData,
  flint: flintLogo as StaticImageData,
  eternl: eternlLogo,
} as const;

export { ROUTES, WALLET_CARDANO_KEY_TO_LOGO };
