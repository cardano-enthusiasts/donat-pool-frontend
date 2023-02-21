import { ToastContainer } from 'react-toastify';

import Footer from 'shared/components/Footer/Footer';
import Header from 'shared/components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';

import { Inner, Main } from './Base.styled';
import type { Props } from './types';

const Base = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>
        <Inner>{children}</Inner>
      </Main>
      <Footer />
      <ToastContainer position="bottom-right" theme="light" />
    </>
  );
};

export default Base;
