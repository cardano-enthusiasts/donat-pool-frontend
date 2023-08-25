import { useCallback, useEffect } from 'react';

import { setRequestStatus, setFundraisings, setError } from '@/redux/slices/getUserRelatedFundraisings';
import { createConnectionParameters, transformFundraisings } from '@/shared/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import type { FetchedFundraising } from '@/shared/types';

import useOffchain from './useOffchain';

function useUserFundraisings() {
  const offchain = useOffchain();
  const { requestStatus, fundraisings, error } = useAppSelector((state) => state.getUserRelatedFundraisings);
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
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
    if (offchain && activeWalletCardanoKey) {
      dispatch(setRequestStatus('requesting'));
      offchain.getUserRelatedFundraisings(handleFetchSuccess)(handleFetchFailure)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL),
      )(createConnectionParameters(activeWalletCardanoKey))();
    }
  }, [offchain, activeWalletCardanoKey, dispatch, handleFetchSuccess, handleFetchFailure]);

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
}

export default useUserFundraisings;
