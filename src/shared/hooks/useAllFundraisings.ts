import { useEffect } from 'react';

import { testnetNami } from '@/shared/constants/wallet';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import {
  setStatus,
  setFundraisings,
  setError,
} from '@/store/slices/getAllFundraisings';

import useDonatPool from './useDonatPool';

const useAllFundraisings = () => {
  const donatlPool = useDonatPool();
  const {
    connectWallet: { status: connectWalletStatus },
    getAllFundraisings: { fundraisings },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (connectWalletStatus === 'success') {
      dispatch(setStatus('requesting'));

      donatlPool?.getAllFundraisings((fundraisings) => {
        dispatch(setFundraisings(fundraisings));
      })((error) => {
        dispatch(setError(error));
      })(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL))(testnetNami)();
    }
  }, [connectWalletStatus, dispatch, donatlPool]);

  return fundraisings;
};

export default useAllFundraisings;
