import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { requestAllDonatPools } from '@/redux/slices/allDonatPools/thunk';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setSuccess } from '@/redux/slices/donating';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useOffchain, useHandleError } from '@/shared/hooks';
import type { DonatPoolTokenData, Protocol } from '@/shared/types';

function useDonate() {
  const offchain = useOffchain();
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
  const dispatch = useAppDispatch();
  const handleCommonError = useHandleError();

  function handleSuccess() {
    dispatch(setWalletStatus('connected'));
    dispatch(setSuccess());
    dispatch(requestAllDonatPools());
  }

  function handleError(error: string) {
    console.error('donate:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && activeWalletCardanoKey) {
    return (donatPoolData: DonatPoolTokenData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol)(
        createConnectionParameters(activeWalletCardanoKey),
      )(donatPoolData)(amount)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useDonate;
