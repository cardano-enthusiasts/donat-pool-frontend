import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setSuccess } from '@/redux/slices/donating';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useAppSelector, useAppDispatch, useFundraisings, useOffchain } from '@/shared/hooks';
import { FundraisingData } from '@/shared/types/common';

import useHandleError from './useHandleError';

function useDonate() {
  const offchain = useOffchain();
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
  const dispatch = useAppDispatch();
  const { refetchFundraisings } = useFundraisings();
  const handleCommonError = useHandleError();

  function handleSuccess() {
    dispatch(setWalletStatus('connected'));
    dispatch(setSuccess());
    refetchFundraisings();
  }

  function handleError(error: string) {
    console.error('donate:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && activeWalletCardanoKey) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL))(
        createConnectionParameters(activeWalletCardanoKey),
      )(fundraisingData)(amount)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useDonate;
