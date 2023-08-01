import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setWalletStatusSuccess } from '@/features/info/redux/actionCreators';
import { Common } from '@/layouts';
import { MyProjects , NotAvailableError } from '@/shared/components';
import { useGetUserFundraisings, useOffchain } from '@/shared/helpers/hooks';
import { type AppReduxState } from '@/shared/types';

const PrivateProjects = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const offchain = useOffchain();
  const getUserFundraisings = useGetUserFundraisings();
  const {
    communication: {
      setWalletStatus: { isRequesting },
    },
    data: { walletStatus },
  } = useSelector((state: AppReduxState) => state.info);

  useEffect(() => {
    document.title = 'My projects';
  }, []);

  useEffect(() => {
    if (offchain && walletStatus === 'connected') {
      getUserFundraisings();
    }
  }, [offchain, walletStatus]);

  useEffect(() => {
    if (walletStatus === 'declined') {
      router.push('/');
      dispatch(setWalletStatusSuccess('default'));
    }
  }, [walletStatus, window]);

  return walletStatus === 'notAvailable' || !window?.cardano?.nami ? (
    <NotAvailableError />
  ) : !isRequesting ? (
    <Common>
      <MyProjects
        onCreateAProjectClick={() => {
          router.push('/new-project');
        }}
      />
    </Common>
  ) : (
    <></>
  );
};

export default PrivateProjects;
