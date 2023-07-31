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
  RoadmapForReading,
} from 'pages';
import { NotAvailableError } from 'shared/components';
import { type AppReduxState } from 'shared/types';

const Base = () => {
  const location = useLocation();
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [walletIsNotAvailable, setWalletIsNotAvailable] = useState(false);
  const routes = [
    { path: '/', element: <Landing />, isAvailableWithoutWallet: true },
    {
      path: '/my-projects',
      element: <PrivateProjects />,
      isAvailableWithoutWallet: false,
    },
    {
      path: '/new-project',
      element: <NewProject />,
      isAvailableWithoutWallet: false,
    },
    {
      path: '/all-projects',
      element: <AllProjects />,
      isAvailableWithoutWallet: false,
    },
    {
      path: '/all-projects/:id',
      element: <PublicProject />,
      isAvailableWithoutWallet: false,
    },
    {
      path: '/my-projects/:id',
      element: <PrivateProject />,
      isAvailableWithoutWallet: false,
    },
    { path: '/faq', element: <FAQ />, isAvailableWithoutWallet: true },
    {
      path: '/roadmap',
      element: <RoadmapForReading />,
      isAvailableWithoutWallet: true,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      const isNotAvailable =
        walletStatus === 'notAvailable' ||
        !window.cardano ||
        !window.cardano.nami;
      const pathsWithoutWallets = routes.filter(
        ({ isAvailableWithoutWallet }) => isAvailableWithoutWallet,
      );
      const isWalletFreePage = pathsWithoutWallets.some(
        ({ path }) => path === location.pathname,
      );

      setWalletIsNotAvailable(isNotAvailable && !isWalletFreePage);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletStatus, location.pathname]);

  useEffect(() => {
    if (walletStatus === 'declined') {
      navigate('/');
      dispatch(setWalletStatusSuccess('default'));
    }
    if (walletIsNotAvailable) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletStatus, window]);

  return walletIsNotAvailable ? (
    <NotAvailableError />
  ) : (
    <>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </>
  );
};

export default Base;
