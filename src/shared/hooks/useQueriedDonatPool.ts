import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import { useDonatPools } from '@/shared/hooks';

function useQueriedDonatPool() {
  const params = useParams();
  const { areBeingFetched, donatPools, fetchError } = useDonatPools();
  const donatPool = useMemo(
    () => donatPools?.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id),
    [donatPools, params.id],
  );

  return {
    isBeingFetched: areBeingFetched,
    donatPool,
    fetchError,
  };
}

export default useQueriedDonatPool;
