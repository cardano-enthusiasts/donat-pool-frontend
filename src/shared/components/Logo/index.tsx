import Link from 'next/link';

import { ROUTES } from '@/shared/constants';
import LogoIcon from '@public/icons/logo.svg';

function Logo() {
  return (
    <Link href={ROUTES.home} className="max-[450px]:opacity-0">
      <LogoIcon alt="logo" />
    </Link>
  );
}

export default Logo;
