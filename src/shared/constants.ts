import eternlLogo from '../../public/icons/eternl.png';
import flintLogo from '../../public/icons/flint.svg';
import lodeLogo from '../../public/icons/lode.svg';
import namiLogo from '../../public/icons/nami.svg';

const ROUTES = {
  home: '/',
  fundraisings: '/all-projects',
  userFundraisings: '/my-projects',
  newFundraising: '/new-project',
  roadmap: '/roadmap',
  faq: '/faq',
  landingTutorial: '/#tutorial',
  termsOfUse: 'terms-of-use',
  mock: '/mock-address',
} as const;

const WALLET_CARDANO_KEY_TO_LOGO = {
  nami: namiLogo,
  LodeWallet: lodeLogo,
  flint: flintLogo,
  eternl: eternlLogo,
} as const;

export { ROUTES, WALLET_CARDANO_KEY_TO_LOGO };
