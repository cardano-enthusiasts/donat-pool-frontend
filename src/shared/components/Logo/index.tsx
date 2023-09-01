import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';
import logo from '@public/icons/logo.svg';

function Logo() {
  return (
    <Link href={ROUTES.home} className="max-[450px]:opacity-0">
      <Image src={logo as StaticImageData} alt="logo" />
    </Link>
  );
}

export default Logo;
