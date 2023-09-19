import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { useFetchDonatPoolsQuery } from '@/redux/slices/backEnd';

function useQueriedDonatPool() {
  const params = useParams();
  const {
    isFetching: donatPoolsAreBeingFetched,
    data: donatPools,
    error: fetchDonatPoolsError,
  } = useFetchDonatPoolsQuery();

  const donatPool = useMemo(
    () => donatPools?.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id),
    [donatPools, params.id],
  );

  return {
    isBeingFetched: donatPoolsAreBeingFetched,
    donatPool,
    fetchError: fetchDonatPoolsError,
  };
}

export default useQueriedDonatPool;
