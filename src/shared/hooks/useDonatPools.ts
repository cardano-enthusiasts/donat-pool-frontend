import { useCallback, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setStatus, setDonatPools, setError } from '@/redux/slices/getAllFundraisings';
import { createConnectionParameters, transformFetchedDonatPools } from '@/shared/helpers';
import { FetchedDonatPool, Protocol } from '@/shared/types';

import useOffchain from './useOffchain';

function useDonatPools() {
  const offchain = useOffchain();
  const { status, donatPools, error } = useAppSelector((state) => state.getAllFundraisings);
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
      console.error(error);
      dispatch(setError(error));
    },
    [dispatch],
  );

  const fetchDonatPools = useCallback(() => {
    if (offchain && activeWalletCardanoKey) {
      dispatch(setStatus('requesting'));
      offchain.getAllFundraisings(handleFetchSuccess)(handleFetchFailure)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol,
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

export default useDonatPools;
