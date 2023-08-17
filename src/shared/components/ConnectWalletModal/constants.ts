import eternlLogo from '../../../../public/icons/eternl.png';
import flintLogo from '../../../../public/icons/flint.svg';
import namiLogo from '../../../../public/icons/nami.svg';

const WALLET_NAME_TO_IMAGE_SRC = {
  Nami: namiLogo,
  Flint: flintLogo,
  Eternl: eternlLogo,
};

const WALLET_NAME_TO_WEBSITE = {
  Nami: 'https://namiwallet.io/',
  Flint: 'https://flint-wallet.com/',
  Eternl: 'https://eternl.io/app/mainnet/welcome',
};

export { WALLET_NAME_TO_IMAGE_SRC, WALLET_NAME_TO_WEBSITE };
