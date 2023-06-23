import { Link } from 'react-router-dom';

import { LogoWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <img src="/img/logo.svg" alt="logo" />
      </Link>
    </LogoWrapper>
  );
};

export { Logo };
