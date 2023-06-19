import { useEffect, useState } from 'react';

import { Footer, Header } from 'shared/components';

import { Inner, Main } from './Common.styled';

const Common = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('');

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
