import Link from 'next/link';

import { ROUTES } from '@/shared/constants';
import LogoIcon from '@public/icons/logo.svg';

function Logo() {
  return (
    <Link href={ROUTES.home}>
      <LogoIcon className="w-[17.6875rem] max-md:w-[13.375rem]" />
    </Link>
  );
}

export default Logo;
