import { useTheme } from '@emotion/react';
import LinkNext from 'next/link';

import { LogoLink } from './Logo.styled';

const Logo = () => {
  const theme = useTheme();

  return (
    <LinkNext href="/" passHref legacyBehavior>
      <LogoLink theme={theme}>Donat.Pool</LogoLink>
    </LinkNext>
  );
};

export default Logo;
