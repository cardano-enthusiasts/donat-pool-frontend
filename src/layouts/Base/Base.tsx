import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import { AllProjects, Landing, Management, Profile } from 'pages';
import { Footer, Header, NotAvailableError } from 'shared/components';
import 'react-toastify/dist/ReactToastify.css';
import { useGetAppInfo, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { Inner, Main } from './Base.styled';

const Base = () => {
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [walletIsNotAvailable, setWalletIsNotAvailable] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const getAppInfo = useGetAppInfo();
  const offchain = useOffchain();

  useEffect(() => {
    if (offchain) {
      getAppInfo();
    }
  }, [offchain]);

  useEffect(() => {
    setTimeout(() => {
      setWalletIsNotAvailable(
        walletStatus === 'notAvailable' ||
          !window.cardano ||
          !window.cardano.nami
      );
    }, 1000);
  }, [walletStatus]);

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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/management" element={<Management />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </>
  );
};

export default Base;
