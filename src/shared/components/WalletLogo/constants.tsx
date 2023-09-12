import EternlLogo from '@public/icons/eternl.svg';
import FlintLogo from '@public/icons/flint.svg';
import LodeLogo from '@public/icons/lode.svg';
import NamiLogo from '@public/icons/nami.svg';

const LOGOS = {
  // Svgr doesn't provide types for svg components
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  nami: NamiLogo,
  // Svgr doesn't provide types for svg components
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  LodeWallet: LodeLogo,
  // Svgr doesn't provide types for svg components
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  flint: FlintLogo,
  // Svgr doesn't provide types for svg components
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  eternl: EternlLogo,
} as const;

export { LOGOS };
