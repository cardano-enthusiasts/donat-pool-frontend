import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setSuccess } from '@/redux/slices/donating';
import { testnetNami } from '@/shared/constants';
import { logOffchainError } from '@/shared/helpers';
import { useAppDispatch } from '@/shared/hooks';
import { useFundraisings, useDonatPool } from '@/shared/hooks';
import type { FundraisingData } from '@/shared/types/common';

import useHandleError from './useHandleError';

const useDonate = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const { refetchFundraisings } = useFundraisings();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);

  const handleSuccess = () => {
    dispatch(setWalletStatus('connected'));
    dispatch(setSuccess());
    refetchFundraisings();
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
