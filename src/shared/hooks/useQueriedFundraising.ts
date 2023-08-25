import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import useFundraisings from './useFundraisings';

function useQueriedFundraising() {
  const params = useParams();
  const { areBeingFetched, fundraisings, fetchError } = useFundraisings();
  const fundraising = useMemo(
    () => fundraisings?.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id),
    [fundraisings, params.id],
  );

  return {
    isBeingFetched: areBeingFetched,
    fundraising,
    fetchError,
  };
}

export default useQueriedFundraising;
