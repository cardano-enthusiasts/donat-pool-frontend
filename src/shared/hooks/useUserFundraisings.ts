import { useCallback, useEffect } from 'react';

import { setRequestStatus, setFundraisings, setError } from '@/redux/slices/getUserRelatedFundraisings';
import { testnetNami } from '@/shared/constants';
import { transformFundraisings } from '@/shared/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import type { FetchedFundraising } from '@/shared/types';

import useDonatPool from './useDonatPool';

const useUserFundraisings = () => {
  const donatPool = useDonatPool();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);
  const { requestStatus, fundraisings, error } = useAppSelector((state) => state.getUserRelatedFundraisings);
  const dispatch = useAppDispatch();

  const handleFetchSuccess = useCallback(
    (fundraisings: FetchedFundraising[]) => {
      dispatch(setFundraisings(transformFundraisings(fundraisings)));
    },
    [dispatch],
  );

  const handleFetchFailure = useCallback(
    (error: string) => {
      console.error(`getUserRelatedFundraisings: ${error}`);
      dispatch(setError(error));
    },
    [dispatch],
  );

  const fetchFundraisings = useCallback(() => {
    if (connectWalletStatus === 'success' && donatPool) {
      dispatch(setRequestStatus('requesting'));
      donatPool.getUserRelatedFundraisings(handleFetchSuccess)(handleFetchFailure)(
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

export default useUserFundraisings;
