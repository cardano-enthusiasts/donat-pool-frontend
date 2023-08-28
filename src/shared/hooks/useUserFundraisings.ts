import { useCallback, useEffect } from 'react';

import { setStatus, setFundraisings, setError } from '@/redux/slices/getUserRelatedFundraisings';
import { createConnectionParameters, transformFundraisings } from '@/shared/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import { FetchedFundraising } from '@/shared/types';

import useOffchain from './useOffchain';

function useUserFundraisings() {
  const offchain = useOffchain();
  const { status, fundraisings, error } = useAppSelector((state) => state.getUserRelatedFundraisings);
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
      dispatch(setError(error));
    },
    [dispatch],
  );

  const fetchFundraisings = useCallback(() => {
    if (offchain && activeWalletCardanoKey) {
      dispatch(setStatus('requesting'));
      offchain.getUserRelatedFundraisings(handleFetchSuccess)(handleFetchFailure)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL),
      )(createConnectionParameters(activeWalletCardanoKey))();
    }
  }, [offchain, activeWalletCardanoKey, dispatch, handleFetchSuccess, handleFetchFailure]);

  useEffect(() => {
    if (status === 'default') {
      fetchFundraisings();
    }
  }, [status, fetchFundraisings, dispatch]);

  return {
    areBeingFetched: status === 'requesting',
    fundraisings,
    fetchError: error,
    refetchFundraisings: fetchFundraisings,
  };
}

export default useUserFundraisings;
