import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { useGetDonatPoolsQuery } from '@/services/api';

function useQueriedDonatPool() {
  const params = useParams();
  const { data: donatPools, error: fetchError, isLoading } = useGetDonatPoolsQuery();

  const donatPool = useMemo(
    () => donatPools?.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id),
    [donatPools, params.id],
  );

  return {
    isBeingFetched: isLoading,
    donatPool,
    fetchError,
  };
}

export default useQueriedDonatPool;
