import { useCallback, useEffect } from 'react';

import { setStatus, setDonatPools, setError } from '@/redux/slices/getUserRelatedFundraisings';
import { createConnectionParameters, transformFetchedDonatPools } from '@/shared/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import { FetchedDonatPool } from '@/shared/types';

import useOffchain from './useOffchain';

function useMyDonatPools() {
  const offchain = useOffchain();
  const { status, donatPools, error } = useAppSelector((state) => state.getUserRelatedFundraisings);
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
  const dispatch = useAppDispatch();

  const handleFetchSuccess = useCallback(
    (donatPools: FetchedDonatPool[]) => {
      dispatch(setDonatPools(transformFetchedDonatPools(donatPools)));
    },
    [dispatch],
  );

  const handleFetchFailure = useCallback(
    (error: string) => {
      dispatch(setError(error));
    },
    [dispatch],
  );

  const fetchDonatPools = useCallback(() => {
    if (offchain && activeWalletCardanoKey) {
      dispatch(setStatus('requesting'));
      offchain.getUserRelatedFundraisings(handleFetchSuccess)(handleFetchFailure)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL),
      )(createConnectionParameters(activeWalletCardanoKey))();
    }
  }, [offchain, activeWalletCardanoKey, dispatch, handleFetchSuccess, handleFetchFailure]);

  useEffect(() => {
    if (status === 'default') {
      fetchDonatPools();
    }
  }, [status, fetchDonatPools, dispatch]);

  return {
    areBeingFetched: status === 'requesting',
    donatPools,
    fetchError: error,
    refetchDonatPools: fetchDonatPools,
  };
}

export default useMyDonatPools;
