import { useCallback, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setStatus, setDonatPools, setError } from '@/redux/slices/getUserRelatedFundraisings';
import { createConnectionParameters } from '@/shared/helpers';
import { useCardano, useOffchain } from '@/shared/hooks';
import type { FetchedDonatPool, Protocol } from '@/shared/types';

function useMyDonatPools() {
  const offchain = useOffchain();
  const { status, donatPools, error } = useAppSelector((state) => state.getUserRelatedFundraisings);
  const { connectedWalletCardanoKey } = useCardano();
  const dispatch = useAppDispatch();

  const handleFetchSuccess = useCallback(
    (fetchedDonatPools: FetchedDonatPool[]) => {
      const donatPools = fetchedDonatPools.map((fetchedDonatPool) => {
        const transformedCreator = fetchedDonatPool.creator ? fetchedDonatPool.creator.value0 : null;
        const donatPool = { ...fetchedDonatPool, creator: transformedCreator };
        return donatPool;
      });
      dispatch(setDonatPools(donatPools));
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
      dispatch(setStatus('requesting'));
      offchain.getUserRelatedFundraisings(handleFetchSuccess)(handleFetchFailure)(
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

export default useMyDonatPools;
