import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import {
  AllProjects,
  Landing,
  Management,
  PrivateProject,
  Profile,
  PublicProject,
} from 'pages';
import { NotAvailableError } from 'shared/components';
import 'react-toastify/dist/ReactToastify.css';
import { useGetAppInfo, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

const Base = () => {
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [walletIsNotAvailable, setWalletIsNotAvailable] = useState(false);

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

  return walletIsNotAvailable ? (
    <NotAvailableError />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/management" element={<Management />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/all-projects/:id" element={<PublicProject />} />
        <Route path="/my-profile/:id" element={<PrivateProject />} />
      </Routes>
    </>
  );
};

export default Base;
