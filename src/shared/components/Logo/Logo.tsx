import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

import { LogoWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href={ROUTES.home}>
        <Image src="/img/logo.svg" width={283} height={40} alt="logo" />
      </Link>
    </LogoWrapper>
  );
};

export { Logo };
