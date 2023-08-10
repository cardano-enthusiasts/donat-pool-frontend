import { useCallback, useEffect } from 'react';

import { testnetNami } from '@/shared/constants';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setStatus, setError } from '@/store/slices/connectWallet';

import useDonatPool from './useDonatPool';

const useAuthGuard = () => {
  const donatPool = useDonatPool();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.status);
  const dispatch = useAppDispatch();

  const handleFetchSuccess = useCallback(() => {
    dispatch(setStatus('success'));
  }, [dispatch]);

  const handleFetchFailure = useCallback(
    (error: string) => {
      console.error('connectWallet:', error);
      dispatch(setError(error));
    },
    [dispatch],
  );

  useEffect(() => {
    if (connectWalletStatus !== 'success' && donatPool) {
      dispatch(setStatus('requesting'));
      donatPool.connectWallet(handleFetchSuccess)(handleFetchFailure)(testnetNami)();
    }
  }, [connectWalletStatus, donatPool, dispatch, handleFetchSuccess, handleFetchFailure]);
};

export default useAuthGuard;
