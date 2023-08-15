import { useRouter } from 'next/router';
import { useMemo } from 'react';

import useFundraisings from './useFundraisings';

const useQueriedFundraising = () => {
  const router = useRouter();
  const {
    areBeingFetched: allFundraisingsAreBeingFetched,
    fundraisings: allFundraisings,
    error: fetchAllFundraisingsError,
  } = useFundraisings();
  const fundraising = useMemo(
    () => allFundraisings?.find(({ threadTokenCurrency }) => threadTokenCurrency === router.query.id),
    [allFundraisings, router.query.id],
  );

  return {
    isBeingFetched: allFundraisingsAreBeingFetched,
    fundraising,
    error: fetchAllFundraisingsError,
  };
};

export default useQueriedFundraising;
