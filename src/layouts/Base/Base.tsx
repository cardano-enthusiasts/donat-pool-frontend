import Footer from 'shared/components/Footer/Footer';
import Header from 'shared/components/Header/Header';

import type { Props } from './types';

const Base = ({ keywords, description, title, children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
