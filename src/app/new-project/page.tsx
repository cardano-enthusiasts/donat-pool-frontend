import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setWalletStatusSuccess } from '@/features/info/redux/actionCreators';
import { Common } from '@/layouts';
import { NotAvailableError, ProjectCreation } from '@/shared/components';
import { type AppReduxState } from '@/shared/types';

const NewProject = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.info.communication.setWalletStatus,
  );
  const {
    data: { walletStatus },
  } = useSelector((state: AppReduxState) => state.info);

  useEffect(() => {
    document.title = 'New project';
  }, []);

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
      <ProjectCreation
        onClose={() => {
          router.push('/my-projects');
        }}
      />
    </Common>
  ) : (
    <></>
  );
};

export default NewProject;
