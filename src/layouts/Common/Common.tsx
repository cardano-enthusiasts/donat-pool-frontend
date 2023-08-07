import { useEffect, useState } from 'react';

import { Footer, Header } from '@/shared/components';
import { useGetAppInfo } from '@/shared/helpers/hooks';
import { useDonatPool } from '@/shared/hooks';

import { Inner, Main } from './Common.styled';
import { type Props } from './types';

const Common = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState('');

  const getAppInfo = useGetAppInfo();
  const offchain = useDonatPool();

  useEffect(() => {
    if (offchain) {
      getAppInfo();
    }
  }, [offchain]);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Header currentPage={currentPage} />
      <Main>
        <Inner>{children}</Inner>
      </Main>
      <Footer />
    </>
  );
};

export { Common };
