'use client';

import { useCallback, useEffect, useState } from 'react';

import { testnetNami } from '@/shared/constants/wallet';
import { type Fundraising } from '@/shared/types';
import { useAppSelector } from '@/store/hooks';

import useDonatPool from './useDonatPool';

const useAllFundraisings = () => {
  const donatPool = useDonatPool();
  const [areBeingFetched, setAreBeingFetched] = useState(false);
  const [fundraisings, setFundraisings] = useState<Fundraising[]>([]);
  const {
    connectWallet: { status: connectWalletStatus },
  } = useAppSelector((state) => state);
  const [fetchError, setFetchError] = useState<string | undefined>();

  const fetchFundraisings = useCallback(() => {
    setAreBeingFetched(true);

    donatPool?.getAllFundraisings((fundraisings) => {
      setFundraisings(fundraisings);
    })((error) => {
      console.error('getAllFundraisings:', error);
      setFetchError(error);
    })(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL))(testnetNami)();
  }, [donatPool]);

  useEffect(() => {
    if (connectWalletStatus === 'success') {
      fetchFundraisings();
    }
  }, [connectWalletStatus, fetchFundraisings]);

  return {
    allFundraisingsAreBeingFetched: areBeingFetched,
    allFundraisings: fundraisings,
    fetchAllFundraisingsError: fetchError,
    refetchAllFundraisings: fetchFundraisings,
  };
};

export default useAllFundraisings;
