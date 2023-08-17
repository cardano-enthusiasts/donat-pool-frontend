import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

import { LogoWrapper } from './Logo.styled';
import logo from '../../../../public/icons/logo.svg';

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href={ROUTES.home}>
        <Image src={logo} alt="logo" />
      </Link>
    </LogoWrapper>
  );
};

export { Logo };
