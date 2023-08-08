import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

import { LogoWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href={ROUTES.root}>
        <Image src="/img/logo.svg" alt="logo" />
      </Link>
    </LogoWrapper>
  );
};

export { Logo };
