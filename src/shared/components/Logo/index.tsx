import Link from 'next/link';

import { ROUTES } from '@/shared/constants';
import LogoIcon from '@public/icons/logo.svg';

function Logo() {
  return (
    <Link href={ROUTES.home}>
      <LogoIcon />
    </Link>
  );
}

export default Logo;
