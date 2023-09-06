import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';
import logo from '@public/icons/logo.svg';

function Logo() {
  return (
    <Link href={ROUTES.home}>
      <Image src={logo as StaticImageData} alt="logo" />
    </Link>
  );
}

export default Logo;
