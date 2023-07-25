import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import {
  AllProjects,
  Landing,
  PrivateProject,
  PublicProject,
  NewProject,
  PrivateProjects,
  FAQ,
} from 'pages';
import { NotAvailableError } from 'shared/components';
import { useGetAppInfo, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

const Base = () => {
  const location = useLocation();
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
      const isAvailable =
        walletStatus === 'notAvailable' ||
        !window.cardano ||
        !window.cardano.nami;
      const isLanding = location.pathname === '/';
      setWalletIsNotAvailable(isAvailable && !isLanding);
    }, 1000);
  }, [walletStatus, location.pathname]);

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
        <Route path="/my-projects" element={<PrivateProjects />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/all-projects/:id" element={<PublicProject />} />
        <Route path="/my-projects/:id" element={<PrivateProject />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
};

export default Base;
