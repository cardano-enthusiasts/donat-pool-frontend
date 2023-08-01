import { useDispatch } from 'react-redux';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import {
  update,
  updateFail,
  updateSuccess,
} from 'features/protocol/redux/actionCreators';
import { type Config } from '@/shared/types';

import {
  useGetAppInfo,
  useOffchain,
  useCheckWalletStatus,
  useHandleError,
} from '../..';
import { getOffchainError } from '../../..';

const useUpdateProtocol = ({ onSuccess, onError }) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getAppInfo = useGetAppInfo();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = () => {
    dispatch(updateSuccess());
    dispatch(setWalletStatusSuccess('connected'));
    getAppInfo();
    onSuccess();
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(updateFail(error));
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
        editConfig(config),
      )();
      checkWalletStatus();
      dispatch(update());
    };
  }
  return () => getOffchainError;
};

export { useUpdateProtocol };
