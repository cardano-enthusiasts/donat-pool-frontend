import { Link } from 'react-router-dom';

import { LogoLink } from './Logo.styled';

const Logo = () => {
  return (
    <Link to="/">{/* <LogoLink theme={theme}>Donat.Pool</LogoLink> */}</Link>
  );
};

export default Logo;
