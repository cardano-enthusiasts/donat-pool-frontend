import eternlLogo from '../../../../public/icons/eternl.png';
import flintLogo from '../../../../public/icons/flint.svg';
import namiLogo from '../../../../public/icons/nami.svg';

const WALLET_NAME_TO_DATA = {
  nami: {
    imageSrc: namiLogo,
    title: 'Nami',
    websiteUrl: 'https://namiwallet.io/',
  },
  flint: {
    imageSrc: flintLogo,
    title: 'Flint',
    websiteUrl: 'https://flint-wallet.com/',
  },
  eternl: {
    imageSrc: eternlLogo,
    title: 'Eternl',
    websiteUrl: 'https://eternl.io/app/mainnet/welcome',
  },
};

export { WALLET_NAME_TO_DATA };
