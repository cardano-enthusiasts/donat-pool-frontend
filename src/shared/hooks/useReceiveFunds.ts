import { selectConnectedWallet } from '@/redux/slices/cardano';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setSuccess, setRequesting } from '@/redux/slices/fundsReceiving';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import { useDonatPool, useUserFundraisings } from '@/shared/hooks';
import type { FundraisingData } from '@/shared/types/common';

import useHandleError from './useHandleError';

const useReceiveFunds = () => {
  const offchain = useDonatPool();
  const connectedWallet = useAppSelector(selectConnectedWallet);
  const dispatch = useAppDispatch();
  const { refetchFundraisings: refetchUserFundraisings } = useUserFundraisings();
  const handleCommonError = useHandleError();

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

  if (offchain && connectedWallet) {
    return (fundraisingData: FundraisingData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL))(
        createConnectionParameters(connectedWallet.name),
      )(fundraisingData)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
};

export default useReceiveFunds;
