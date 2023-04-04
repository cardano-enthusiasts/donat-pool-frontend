import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import AllProjects from 'layouts/AllProjects/AllProjects';
import Home from 'layouts/Home/Home';
import Management from 'layouts/Management/Management';
import Profile from 'layouts/Profile/Profile';
import { Footer, Header, NotAvailableError } from 'shared/components';
import 'react-toastify/dist/ReactToastify.css';
import { type AppReduxState } from 'shared/types';

import { Inner, Main } from './Base.styled';

const Base = () => {
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const walletIsNotAvailable =
    walletStatus === 'notAvailable' || !window.cardano || !window.cardano.nami;
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    if (walletStatus === 'declined') {
      navigate('/');
      dispatch(setWalletStatusSuccess('default'));
    }
    if (walletIsNotAvailable) {
      navigate('/');
    }
  }, [walletStatus, window]);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return walletIsNotAvailable ? (
    <NotAvailableError />
  ) : (
    <>
      <Header currentPage={currentPage} />
      <Main>
        <Inner>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/management" element={<Management />} />
            <Route path="/my-profile" element={<Profile />} />
            <Route path="/all-projects" element={<AllProjects />} />
          </Routes>
        </Inner>
      </Main>
      <Footer />
      <ToastContainer position="bottom-right" theme="light" />
    </>
  );
};

export default Base;
