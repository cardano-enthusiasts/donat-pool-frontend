import { useEffect, useState } from 'react';

import { useAppSelector } from 'core/hooks';
import { CommonError, Footer, Header } from 'shared/components';
import { errors, missingCollateral } from 'shared/constants';
import { useGetAppInfo, useOffchain } from 'shared/helpers/hooks';

import { Inner, Main } from './Common.styled';
import { type Props } from './types';

const Common = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState('');
  const walletStatus = useAppSelector((state) => state.wallet.mode);

  const getAppInfo = useGetAppInfo();
  const offchain = useOffchain();

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
      {walletStatus === 'missingCollateral' && (
        <CommonError>{errors[missingCollateral]}</CommonError>
      )}
      <Main>
        <Inner>{children}</Inner>
      </Main>
      <Footer />
    </>
  );
};

export { Common };
