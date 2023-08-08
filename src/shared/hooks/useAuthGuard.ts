import { useEffect } from 'react';

import { testnetNami } from '@/shared/constants';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setStatus, setError } from '@/store/slices/connectWallet';

import useDonatPool from './useDonatPool';

const useAuthGuard = () => {
  const donatPool = useDonatPool();
  const connectWalletStatus = useAppSelector(
    (state) => state.connectWallet.status,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (connectWalletStatus !== 'success') {
      dispatch(setStatus('requesting'));

      donatPool?.connectWallet(() => {
        dispatch(setStatus('success'));
      })((error) => {
        dispatch(setError(error));
      })(testnetNami)();
    }
  }, [connectWalletStatus, donatPool, dispatch]);
};

export default useAuthGuard;
