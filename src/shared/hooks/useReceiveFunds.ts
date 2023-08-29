import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setSuccess, setRequesting } from '@/redux/slices/fundsReceiving';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useAppSelector, useAppDispatch, useOffchain, useMyDonatPools } from '@/shared/hooks';
import { DonatPoolData } from '@/shared/types/common';

import useHandleError from './useHandleError';

function useReceiveFunds() {
  const offchain = useOffchain();
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
  const dispatch = useAppDispatch();
  const { refetchDonatPools } = useMyDonatPools();
  const handleCommonError = useHandleError();

  function handleSuccess() {
    dispatch(setSuccess());
    dispatch(setWalletStatus('connected'));
    refetchDonatPools();
  }

  function handleError(error: string) {
    console.error('receiveFunds:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && activeWalletCardanoKey) {
    return (donatPoolData: DonatPoolData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL))(
        createConnectionParameters(activeWalletCardanoKey),
      )(donatPoolData)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useReceiveFunds;
