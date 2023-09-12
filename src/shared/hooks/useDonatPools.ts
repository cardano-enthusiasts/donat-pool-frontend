import { useCallback, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setStatusRequesting, setDonatPools, setError } from '@/redux/slices/getAllFundraisings';
import { createConnectionParameters, transformFetchedDonatPools } from '@/shared/helpers';
import { useCardano, useOffchain } from '@/shared/hooks';
import type { FetchedDonatPool, Protocol } from '@/shared/types';

function useDonatPools() {
  const offchain = useOffchain();
  const { status, donatPools, error } = useAppSelector((state) => state.getAllFundraisings);
  const { connectedWalletCardanoKey } = useCardano();
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
    if (offchain && connectedWalletCardanoKey) {
      dispatch(setStatusRequesting());
      offchain.getAllFundraisings(handleFetchSuccess)(handleFetchFailure)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol,
      )(createConnectionParameters(connectedWalletCardanoKey))();
    }
  }, [offchain, connectedWalletCardanoKey, dispatch, handleFetchSuccess, handleFetchFailure]);

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
