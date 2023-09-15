import { useAppDispatch } from '@/redux/hooks';
import { useFetchDonatPoolsQuery } from '@/redux/slices/backEndApi';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setCreatedPath } from '@/redux/slices/createFundraising';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useOffchain, useMyDonatPools, useCardano, useHandleError } from '@/shared/hooks';
import type { CreateDonatPoolParams, Protocol, DonatPool } from '@/shared/types';

function useCreateDonatPool() {
  const offchain = useOffchain();
  const { connectedWalletCardanoKey } = useCardano();
  const dispatch = useAppDispatch();
  const { refetchDonatPools: refetchMyDonatPools } = useMyDonatPools();
  const { refetch: refetchDonatPools } = useFetchDonatPoolsQuery();
  const handleCommonError = useHandleError();

  function handleSuccess(donatPoolData: DonatPool) {
    dispatch(setCreatedPath(donatPoolData.threadTokenCurrency));
    dispatch(setWalletStatus('connected'));
    refetchMyDonatPools();
    void refetchDonatPools();
  }

  function handleError(error: string) {
    console.error('createFundraising:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && connectedWalletCardanoKey) {
    return (createDonatPoolParams: CreateDonatPoolParams) => {
      offchain.createFundraising(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol)(
        createConnectionParameters(connectedWalletCardanoKey),
      )(createDonatPoolParams)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useCreateDonatPool;
