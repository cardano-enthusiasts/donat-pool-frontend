import { useCallback, useEffect } from 'react';

import { selectConnectedWallet } from '@/redux/slices/cardano';
import { setRequestStatus, setFundraisings, setError } from '@/redux/slices/getUserRelatedFundraisings';
import { createConnectionParameters, transformFundraisings } from '@/shared/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import type { FetchedFundraising } from '@/shared/types';

import useDonatPool from './useDonatPool';

const useUserFundraisings = () => {
  const donatPool = useDonatPool();
  const { requestStatus, fundraisings, error } = useAppSelector((state) => state.getUserRelatedFundraisings);
  const connectedWallet = useAppSelector(selectConnectedWallet);
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
    if (donatPool && connectedWallet) {
      dispatch(setRequestStatus('requesting'));
      donatPool.getUserRelatedFundraisings(handleFetchSuccess)(handleFetchFailure)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL),
      )(createConnectionParameters(connectedWallet.name))();
    }
  }, [donatPool, connectedWallet, dispatch, handleFetchSuccess, handleFetchFailure]);

  useEffect(() => {
    if (requestStatus === 'default') {
      fetchFundraisings();
    }
  }, [requestStatus, fetchFundraisings, dispatch]);

  return {
    areBeingFetched: requestStatus === 'requesting',
    fundraisings,
    error,
    refetchFundraisings: fetchFundraisings,
  };
};

export default useUserFundraisings;
