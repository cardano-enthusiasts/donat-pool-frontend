import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import { Footer, Header, NotAvailableError } from 'shared/components';
import 'react-toastify/dist/ReactToastify.css';
import { type AppReduxState } from 'shared/types';

import { Inner, Main } from './Base.styled';
import type { Props } from './types';

const Base = ({ children, activeHeaderItem }: Props) => {
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const walletIsNotAvailable =
    walletStatus === 'notAvailable' || !window.cardano || !window.cardano.nami;

  useEffect(() => {
    if (walletStatus === 'declined') {
      navigate('/');
      dispatch(setWalletStatusSuccess('default'));
    }
    if (walletIsNotAvailable) {
      navigate('/');
    }
  }, [walletStatus, window]);

  return walletIsNotAvailable ? (
    <NotAvailableError />
  ) : (
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
