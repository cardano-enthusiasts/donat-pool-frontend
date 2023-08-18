import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

const Logo = () => {
  const classes = 'max-[450px]:opacity-0';
  return (
    <Link href={ROUTES.home} className={classes}>
      <Image src="/img/logo.svg" width={283} height={40} alt="logo" className={classes} />
    </Link>
  );
};

export { Logo };
