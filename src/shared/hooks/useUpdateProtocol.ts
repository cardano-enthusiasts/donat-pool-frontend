import { useAppDispatch } from '@/redux/hooks';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setSuccess, setRequesting } from '@/redux/slices/protocolUpdating';
import { logOffchainError } from '@/shared/helpers';
import { useDonatPool } from '@/shared/hooks';
import type { Config } from '@/shared/types/common';

import useGetAppInfo from './useGetAppInfo';
import useHandleError from './useHandleError';

const useUpdateProtocol = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const getAppInfo = useGetAppInfo();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);

  const handleSuccess = () => {
    dispatch(setSuccess());
    dispatch(setWalletStatus('connected'));
    getAppInfo();
  };

  const handleError = (error: string) => {
    console.error('setProtocol:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  const editConfig = (config: any) => {
    return {
      ...config,
      minAmountParam: config.minAmountParam * 1000000,
      maxAmountParam: config.maxAmountParam * 1000000,
    };
  };

  if (offchain) {
    return (config: Config) => {
      offchain.setProtocol(handleSuccess)(handleError)(protocol)(editConfig(config))();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
};

export default useUpdateProtocol;
