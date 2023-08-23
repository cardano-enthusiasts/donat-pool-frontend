import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

const Logo = () => {
  return (
    <Link href={ROUTES.home} className="max-[450px]:opacity-0">
      <Image src="/img/logo.svg" width={283} height={40} alt="logo" />
    </Link>
  );
};

export { Logo };
