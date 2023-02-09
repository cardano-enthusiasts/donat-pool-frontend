import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

import { LogoLink } from './Logo.styled';

const Logo = () => {
  const theme = useTheme();

  return (
    <Link to="/">
      <LogoLink theme={theme}>Donat.Pool</LogoLink>
    </Link>
  );
};

export default Logo;
