import { useAppDispatch } from '@/redux/hooks';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setSuccess, setRequesting } from '@/redux/slices/protocolUpdating';
import { logOffchainError } from '@/shared/helpers';
import { useOffchain, useGetAppInfo, useHandleError } from '@/shared/hooks';
import { Config, Protocol } from '@/shared/types';

function useUpdateProtocol() {
  const offchain = useOffchain();
  const dispatch = useAppDispatch();
  const getAppInfo = useGetAppInfo();
  const handleCommonError = useHandleError();

  function handleSuccess() {
    dispatch(setSuccess());
    dispatch(setWalletStatus('connected'));
    getAppInfo();
  }

  function handleError(error: string) {
    console.error('setProtocol:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  function editConfig(config: Config) {
    return {
      ...config,
      minAmountParam: config.minAmountParam * 1000000,
      maxAmountParam: config.maxAmountParam * 1000000,
    };
  }

  if (offchain) {
    return (config: Config) => {
      offchain.setProtocol(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol)(
        editConfig(config),
      )();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
}

export default useUpdateProtocol;
