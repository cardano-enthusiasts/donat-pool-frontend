import { useCallback, useEffect } from 'react';

import { selectConnectedWallet } from '@/redux/slices/cardano';
import { setRequestStatus, setFundraisings, setError } from '@/redux/slices/getAllFundraisings';
import { createWalletParameters, transformFundraisings } from '@/shared/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import type { FetchedFundraising } from '@/shared/types';

import useDonatPool from './useDonatPool';

const useFundraisings = () => {
  const donatPool = useDonatPool();
  const { requestStatus, fundraisings, error } = useAppSelector((state) => state.getAllFundraisings);
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
      dispatch(setError(error));
    },
    [dispatch],
  );

  const fetchFundraisings = useCallback(() => {
    if (donatPool && connectedWallet) {
      dispatch(setRequestStatus('requesting'));
      donatPool.getAllFundraisings(handleFetchSuccess)(handleFetchFailure)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL),
      )(createWalletParameters(connectedWallet.name))();
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

export default useFundraisings;
