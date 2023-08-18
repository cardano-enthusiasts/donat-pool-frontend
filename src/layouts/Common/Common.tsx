import { useEffect } from 'react';

import { Footer, Header } from '@/shared/components';
import { useGetAppInfo } from '@/shared/hooks';
import { useDonatPool } from '@/shared/hooks';

import { Inner, Main } from './Common.styled';
import type { Props } from './types';

const Common = ({ children }: Props) => {
  const getAppInfo = useGetAppInfo();
  const offchain = useDonatPool();

  useEffect(() => {
    if (offchain) {
      getAppInfo();
    }
  }, [offchain]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main>
        <Inner>{children}</Inner>
      </Main>
      <Footer />
    </div>
  );
};

export { Common };
