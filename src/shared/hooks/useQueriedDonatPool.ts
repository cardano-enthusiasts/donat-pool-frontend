import { useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { requestDonatPools } from '@/redux/slices/donatPools/thunk';

function useQueriedDonatPool() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { status, donatPools, error: fetchError } = useAppSelector((state) => state.donatPools);
  const donatPool = useMemo(
    () => donatPools?.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id),
    [donatPools, params.id],
  );

  useEffect(() => {
    dispatch(requestDonatPools());
  }, []);

  return {
    isBeingFetched: status === 'requesting',
    donatPool,
    fetchError,
  };
}

export default useQueriedDonatPool;
