import Footer from 'shared/components/Footer/Footer';
import Header from 'shared/components/Header/Header';

import { Main } from './Base.styled';
import type { Props } from './types';

const Base = ({ keywords, description, title, children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Base;
