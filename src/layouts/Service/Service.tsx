import { Footer, Header } from 'shared/components';

import { Inner, Main } from './Service.styled';
import { type Props } from './types';

const Service = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>
        <Inner>{children}</Inner>
      </Main>
      <Footer />
    </>
  );
};

export { Service };
