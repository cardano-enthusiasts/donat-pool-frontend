import LinkNext from 'next/link';

import { LogoLink } from './Logo.styled';

const Logo = () => {
  return (
    <LinkNext href="/" passHref legacyBehavior>
      <LogoLink>Donat.Pool</LogoLink>
    </LinkNext>
  );
};

export default Logo;
