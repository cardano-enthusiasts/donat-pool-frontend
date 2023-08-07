import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Footer, Header } from '@/shared/components';
import { useGetAppInfo } from '@/shared/helpers/hooks';
import { useDonatPool } from '@/shared/hooks';

import { Inner, Main } from './Common.styled';
import { type Props } from './types';

const Common = ({ children }: Props) => {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState('');

  const getAppInfo = useGetAppInfo();
  const offchain = useDonatPool();

  useEffect(() => {
    if (offchain) {
      console.log(1);
      getAppInfo();
    }
  }, [offchain]);

  useEffect(() => {
    setCurrentPage(pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentPage={currentPage} />
      <Main>
        <Inner>{children}</Inner>
      </Main>
      <Footer />
    </div>
  );
};

export { Common };
