import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { setRequestStatus } from '@/redux/slices/connectWallet';
import { ROUTES, testnetNami } from '@/shared/constants';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';

import useDonatPool from './useDonatPool';

export default () => {
  const router = useRouter();
  const donatPool = useDonatPool();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);
  const dispatch = useAppDispatch();

  const handleFetchSuccess = useCallback(() => {
    dispatch(setRequestStatus('success'));
  }, [dispatch]);

  const handleFetchFailure = useCallback(
    (error: string) => {
      console.error(error);
      router.push(ROUTES.home);
    },
    [router],
  );

  useEffect(() => {
    if (connectWalletStatus === 'default' && donatPool) {
      dispatch(setRequestStatus('requesting'));
      donatPool.connectWallet(handleFetchSuccess)(handleFetchFailure)(testnetNami)();
    }
  }, [connectWalletStatus, donatPool, dispatch, handleFetchSuccess, handleFetchFailure]);

  return connectWalletStatus === 'success';
};
