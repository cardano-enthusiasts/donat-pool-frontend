import { selectConnectedWallet } from '@/redux/slices/cardano';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setSuccess } from '@/redux/slices/donating';
import { createWalletParameters, logOffchainError } from '@/shared/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import { useFundraisings, useDonatPool } from '@/shared/hooks';
import type { FundraisingData } from '@/shared/types/common';

import useHandleError from './useHandleError';

const useDonate = () => {
  const offchain = useDonatPool();
  const connectedWallet = useAppSelector(selectConnectedWallet);
  const dispatch = useAppDispatch();
  const { refetchFundraisings } = useFundraisings();
  const handleCommonError = useHandleError();

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

  if (offchain && connectedWallet) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL))(
        createWalletParameters(connectedWallet.name),
      )(fundraisingData)(amount)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
};

export default useDonate;
