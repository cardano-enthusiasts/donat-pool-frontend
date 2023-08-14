import { useAppDispatch } from '@/redux/hooks';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setSuccess } from '@/redux/slices/donating';
import { testnetNami } from '@/shared/constants';
import { logOffchainError } from '@/shared/helpers';
import { useAllFundraisings, useDonatPool } from '@/shared/hooks';
import type { FundraisingData } from '@/shared/types/common';

import useHandleError from './useHandleError';

const useDonate = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const { refetchFundraisings: refetchAllFundraisings } = useAllFundraisings();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);

  const handleSuccess = () => {
    dispatch(setWalletStatus('connected'));
    dispatch(setSuccess());
    refetchAllFundraisings();
  };

  const handleError = (error: string) => {
    console.error('donate:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(protocol)(testnetNami)(fundraisingData)(amount)();
      dispatch(setRequesting());
    };
  }
  return () => logOffchainError;
};

export default useDonate;
