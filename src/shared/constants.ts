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
  termsOfUse: 'terms-of-use',
  mock: '/mock-address',
} as const;

const WALLET_NAME_TO_DATA = {
  nami: {
    cardanoKey: 'nami',
    offchainName: 'Nami',
    title: 'Nami',
    logo: namiLogo,
    websiteUrl: 'https://namiwallet.io/',
  },
  lode: {
    cardanoKey: 'LodeWallet',
    offchainName: 'Lode',
    title: 'LodeWallet',
    logo: lodeLogo,
    websiteUrl: 'https://lodewallet.io/',
  },
  flint: {
    cardanoKey: 'flint',
    offchainName: 'Flint',
    title: 'Flint',
    logo: flintLogo,
    websiteUrl: 'https://flint-wallet.com/',
  },
  eternl: {
    cardanoKey: 'eternl',
    offchainName: 'Eternl',
    title: 'Eternl',
    logo: eternlLogo,
    websiteUrl: 'https://eternl.io/app/mainnet/welcome',
  },
} as const;

export { ROUTES, WALLET_NAME_TO_DATA };
