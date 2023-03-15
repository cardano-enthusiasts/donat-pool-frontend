import { ToastContainer } from 'react-toastify';

import { Footer, Header } from 'shared/components';
import 'react-toastify/dist/ReactToastify.css';

import { Inner, Main } from './Base.styled';
import type { Props } from './types';

const Base = ({ children, activeHeaderItem }: Props) => {
  return (
    <>
      <Header activeItem={activeHeaderItem} />
      <Main>
        <Inner>{children}</Inner>
      </Main>
      <Footer />
      <ToastContainer position="bottom-right" theme="light" />
    </>
  );
};

export default Base;
