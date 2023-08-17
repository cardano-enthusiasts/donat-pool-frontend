import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/shared/constants';

const Logo = () => {
  const classes = 'max-[450px]:max-w-50 max-[450px]:block';
  return (
    <Link href={ROUTES.home} className={classes}>
      <Image src="/img/logo.svg" width={283} height={40} alt="logo" className={classes} />
    </Link>
  );
};

export { Logo };
