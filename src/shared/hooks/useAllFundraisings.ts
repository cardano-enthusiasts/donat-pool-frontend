import { useCallback, useEffect } from 'react';

import { testnetNami } from '@/shared/constants';
import { transformFundraisings } from '@/shared/helpers';
import type { FetchedFundraising } from '@/shared/types';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setRequestStatus, setFundraisings, setError } from '@/store/slices/getAllFundraisings';

import useDonatPool from './useDonatPool';

const useAllFundraisings = () => {
  const donatPool = useDonatPool();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);
  const { requestStatus, fundraisings, error } = useAppSelector((state) => state.getAllFundraisings);
  const dispatch = useAppDispatch();

  const handleFetchSuccess = useCallback(
    (fundraisings: FetchedFundraising[]) => {
      dispatch(setFundraisings(transformFundraisings(fundraisings)));
    },
    [dispatch],
  );

  const handleFetchFailure = useCallback(
    (error: string) => {
      dispatch(setError(error));
    },
    [dispatch],
  );

  const fetchFundraisings = useCallback(() => {
    if (connectWalletStatus === 'success' && donatPool) {
      dispatch(setRequestStatus('requesting'));
      donatPool.getAllFundraisings(handleFetchSuccess)(handleFetchFailure)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL),
      )(testnetNami)();
    }
  }, [connectWalletStatus, donatPool, dispatch, handleFetchSuccess, handleFetchFailure]);

  useEffect(() => {
    if (requestStatus === 'default') {
      fetchFundraisings();
    }
  }, [connectWalletStatus, requestStatus, fetchFundraisings, dispatch]);

  return {
    areBeingFetched: requestStatus === 'requesting',
    fundraisings,
    error,
    refetchFundraisings: fetchFundraisings,
  };
};

export default useAllFundraisings;
