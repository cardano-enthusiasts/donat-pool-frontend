'use client';

import { useCallback, useEffect, useState } from 'react';

import { testnetNami } from '@/shared/constants';
import type { Fundraising } from '@/shared/types';
import { useAppSelector } from '@/store/hooks';

import useDonatPool from './useDonatPool';

const useAllFundraisings = () => {
  const donatPool = useDonatPool();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.status);
  const [areBeingFetched, setAreBeingFetched] = useState(false);
  const [fundraisings, setFundraisings] = useState<Fundraising[] | undefined>();
  const [fetchError, setFetchError] = useState<string | undefined>();

  const handleFetchSuccess = useCallback((fundraisings: Fundraising[]) => {
    setAreBeingFetched(false);
    setFundraisings(fundraisings);
  }, []);

  const handleFetchFailure = useCallback((error: string) => {
    setAreBeingFetched(false);
    setFetchError(error);
  }, []);

  const fetchFundraisings = useCallback(() => {
    if (donatPool) {
      setAreBeingFetched(true);
      donatPool.getAllFundraisings(handleFetchSuccess)(handleFetchFailure)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL),
      )(testnetNami)();
    }
  }, [donatPool, handleFetchSuccess, handleFetchFailure]);

  useEffect(() => {
    if (connectWalletStatus === 'success') {
      fetchFundraisings();
    }
  }, [connectWalletStatus, fetchFundraisings]);

  return {
    areBeingFetched,
    fundraisings,
    fetchError,
    refetchFundraisings: fetchFundraisings,
  };
};

export default useAllFundraisings;
