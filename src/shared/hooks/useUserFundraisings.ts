'use client';

import { useCallback, useEffect, useState } from 'react';

import { testnetNami } from '@/shared/constants';
import type { Fundraising } from '@/shared/types';
import { useAppSelector } from '@/store/hooks';

import useDonatPool from './useDonatPool';

const useUserFundraisings = () => {
  const donatPool = useDonatPool();
  const [areBeingFetched, setAreBeingFetched] = useState(false);
  const [fundraisings, setFundraisings] = useState<Fundraising[]>([]);
  const {
    connectWallet: { status: connectWalletStatus },
  } = useAppSelector((state) => state);
  const [fetchError, setFetchError] = useState<string | undefined>();

  const handleFetchSuccess = useCallback((fundraisings: Fundraising[]) => {
    setFundraisings(fundraisings);
  }, []);

  const handleFetchError = useCallback((error: string) => {
    console.error('getUserRelatedFundraisings:', error);
    setFetchError(error);
  }, []);

  const fetchFundraisings = useCallback(() => {
    setAreBeingFetched(true);

    donatPool?.getUserRelatedFundraisings(handleFetchSuccess)(handleFetchError)(
      JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL),
    )(testnetNami)();
  }, [donatPool, handleFetchSuccess, handleFetchError]);

  useEffect(() => {
    if (connectWalletStatus === 'success') {
      fetchFundraisings();
    }
  }, [connectWalletStatus, fetchFundraisings]);

  return {
    userFundraisingsAreBeingFetched: areBeingFetched,
    userFundraisings: fundraisings,
    fetchUserFundraisingsError: fetchError,
    refetchUserFundraisings: fetchFundraisings,
  };
};

export default useUserFundraisings;
