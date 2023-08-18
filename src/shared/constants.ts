import eternlLogo from '../../public/icons/eternl.png';
import flintLogo from '../../public/icons/flint.svg';
import namiLogo from '../../public/icons/nami.svg';

const ROUTES = {
  home: '/',
  fundraisings: '/all-projects',
  userFundraisings: '/my-projects',
  newFundraising: '/new-project',
  roadmap: '/roadmap',
  faq: '/faq',
  termsOfUse: 'terms-of-use',
  mock: '/mock-address',
} as const;

const WALLET_NAME_TO_DATA = {
  nami: {
    logo: namiLogo,
    title: 'Nami',
    websiteUrl: 'https://namiwallet.io/',
  },
  flint: {
    logo: flintLogo,
    title: 'Flint',
    websiteUrl: 'https://flint-wallet.com/',
  },
  eternl: {
    logo: eternlLogo,
    title: 'Eternl',
    websiteUrl: 'https://eternl.io/app/mainnet/welcome',
  },
} as const;

export { ROUTES, WALLET_NAME_TO_DATA };
