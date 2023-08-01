import Link from 'next/link';

import { LogoWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href="/">
        <img src="/img/logo.svg" alt="logo" />
      </Link>
    </LogoWrapper>
  );
};

export { Logo };
