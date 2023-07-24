import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CommonError, Footer, Header } from 'shared/components';
import { errors, missingCollateral } from 'shared/constants';
import { type AppReduxState } from 'shared/types';

import { Inner, Main } from './Common.styled';
import { type Props } from './types';

const Common = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState('');
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data
  );

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
