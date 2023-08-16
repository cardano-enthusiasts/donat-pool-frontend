import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

import { LogoWrapper } from './Logo.styled';

const Logo = () => {
  const classes = 'max-[450px]:max-w-50 max-[450px]:block';
  return (
    <LogoWrapper>
      <Link href={ROUTES.home} className={classes}>
        <Image src="/img/logo.svg" width={283} height={40} alt="logo" className={classes} />
      </Link>
    </LogoWrapper>
  );
};

export { Logo };
