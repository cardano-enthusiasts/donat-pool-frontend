import { useParams } from 'next/navigation';
import { useMemo } from 'react';

import useFundraisings from './useFundraisings';

function useQueriedFundraising() {
  const params = useParams();
  const {
    areBeingFetched: fundraisingsAreBeingFetched,
    fundraisings,
    error: fetchFundraisingsError,
  } = useFundraisings();
  const fundraising = useMemo(
    () => fundraisings?.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id),
    [fundraisings, params.id],
  );

  return {
    isBeingFetched: fundraisingsAreBeingFetched,
    fundraising,
    error: fetchFundraisingsError,
  };
}

export default useQueriedFundraising;
