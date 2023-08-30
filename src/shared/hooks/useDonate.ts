import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setSuccess } from '@/redux/slices/donating';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useDonatPools, useOffchain } from '@/shared/hooks';
import { DonatPoolData } from '@/shared/types/common';

import useHandleError from './useHandleError';
import { Protocol } from '../types';

function useDonate() {
  const offchain = useOffchain();
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
  const dispatch = useAppDispatch();
  const { refetchDonatPools } = useDonatPools();
  const handleCommonError = useHandleError();

  function handleSuccess() {
    dispatch(setWalletStatus('connected'));
    dispatch(setSuccess());
    refetchDonatPools();
  }

  function handleError(error: string) {
    console.error('donate:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && activeWalletCardanoKey) {
    return (donatPoolData: DonatPoolData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol)(
        createConnectionParameters(activeWalletCardanoKey),
      )(donatPoolData)(amount)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useDonate;
