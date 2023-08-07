import { useEffect } from 'react';

import { testnetNami } from '@/shared/constants/wallet';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setStatus, setError } from '@/store/slices/connectWallet';

import useDonatPool from './useDonatPool';

const useAuthGuard = () => {
  const donatPool = useDonatPool();
  const {
    connectWallet: { status },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status !== 'success') {
      dispatch(setStatus('requesting'));

      donatPool?.connectWallet(() => {
        dispatch(setStatus('success'));
      })((error) => {
        dispatch(setError(error));
      })(testnetNami)();
    }
  }, [status, donatPool, dispatch]);
};

export default useAuthGuard;
