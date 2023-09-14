import { useAppDispatch } from '@/redux/hooks';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setSuccess } from '@/redux/slices/donating';
import { useGetDonatPoolsQuery } from '@/services/api';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useOffchain, useHandleError, useCardano } from '@/shared/hooks';
import type { DonatPoolTokenData, Protocol } from '@/shared/types';

function useDonate() {
  const offchain = useOffchain();
  const { connectedWalletCardanoKey } = useCardano();
  const dispatch = useAppDispatch();
  const handleCommonError = useHandleError();
  const { refetch } = useGetDonatPoolsQuery();

  function handleSuccess() {
    dispatch(setWalletStatus('connected'));
    dispatch(setSuccess());
    refetch();
  }

  function handleError(error: string) {
    console.error('donate:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && connectedWalletCardanoKey) {
    return (donatPoolData: DonatPoolTokenData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol)(
        createConnectionParameters(connectedWalletCardanoKey),
      )(donatPoolData)(amount)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useDonate;
