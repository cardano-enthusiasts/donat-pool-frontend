import { type Config } from 'shared/types';
import { useAppDispatch } from 'store/hooks';
import {
  setError,
  setSuccess,
  setRequesting,
} from 'store/slices/protocolUpdating';
import { setWalletMode } from 'store/slices/wallet';

import {
  useGetAppInfo,
  useOffchain,
  useCheckWalletStatus,
  useHandleError,
} from '..';
import { getOffchainError } from '../..';

const useUpdateProtocol = () => {
  const offchain = useOffchain();
  const dispatch = useAppDispatch();
  const getAppInfo = useGetAppInfo();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = () => {
    dispatch(setSuccess());
    dispatch(setWalletMode('connected'));
    getAppInfo();
  };

  const handleError = (error) => {
    console.error('setProtocol:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  const editConfig = (config) => {
    return {
      ...config,
      minAmountParam: config.minAmountParam * 1000000,
      maxAmountParam: config.maxAmountParam * 1000000,
    };
  };

  if (offchain) {
    return (config: Config) => {
      offchain.setProtocol(handleSuccess)(handleError)(protocol)(
        editConfig(config),
      )();
      checkWalletStatus();
      dispatch(setRequesting());
    };
  }
  return () => getOffchainError;
};

export { useUpdateProtocol };
