import { useDispatch } from 'react-redux';

import { setError, setStatus } from 'core/slices/protocolUpdating';
import { updateWalletStatus } from 'core/slices/walletStatus';
import { type Config } from 'shared/types';

import {
  useGetAppInfo,
  useOffchain,
  useCheckWalletStatus,
  useHandleError,
} from '..';
import { getOffchainError } from '../..';

const useUpdateProtocol = ({ onSuccess, onError }) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getAppInfo = useGetAppInfo();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = () => {
    dispatch(setStatus('success'));
    dispatch(updateWalletStatus('connected'));
    getAppInfo();
    onSuccess();
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(setError(error));
    onError();
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
      offchain.updateProtocol(handleSuccess)(handleError)(protocol)(
        editConfig(config)
      )();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return () => getOffchainError;
};

export { useUpdateProtocol };
