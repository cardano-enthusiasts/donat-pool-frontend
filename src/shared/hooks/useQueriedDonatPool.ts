import { useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { requestAllDonatPools } from '@/redux/slices/allDonatPools/thunk';

function useQueriedDonatPool() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { status, donatPools, error: fetchError } = useAppSelector((state) => state.allDonatPools);
  const donatPool = useMemo(
    () => donatPools?.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id),
    [donatPools, params.id],
  );

  useEffect(() => {
    dispatch(requestAllDonatPools());
  }, []);

  return {
    isBeingFetched: status === 'requesting',
    donatPool,
    fetchError,
  };
}

export default useQueriedDonatPool;
