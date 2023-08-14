import { useAppDispatch } from '@/redux/hooks';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setSuccess, setRequesting } from '@/redux/slices/fundsReceiving';
import { testnetNami } from '@/shared/constants';
import { logOffchainError } from '@/shared/helpers';
import { useDonatPool, useUserFundraisings } from '@/shared/hooks';
import type { FundraisingData } from '@/shared/types/common';

import useHandleError from './useHandleError';

const useReceiveFunds = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const { refetchFundraisings: refetchUserFundraisings } = useUserFundraisings();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);

  const handleSuccess = () => {
    dispatch(setSuccess());
    dispatch(setWalletStatus('connected'));
    refetchUserFundraisings();
  };

  const handleError = (error: string) => {
    console.error('receiveFunds:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(protocol)(testnetNami)(fundraisingData)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
};

export default useReceiveFunds;
