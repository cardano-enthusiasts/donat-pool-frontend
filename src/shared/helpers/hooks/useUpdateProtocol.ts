import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  updateProtocol,
  updateProtocolFail,
  updateProtocolSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';
import { useGetProtocolInfo, useOffchain } from 'shared/helpers/hooks';
import { type Config } from 'shared/types';

import { getOffchainError } from '..';

const useUpdateProtocol = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getProtocolInfo = useGetProtocolInfo();

  const handleSuccess = () => {
    toast.success('Config was updated successfully');
    dispatch(updateProtocolSuccess());
    getProtocolInfo();
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(updateProtocolFail(error));
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
      dispatch(updateProtocol());
    };
  }
  return () => getOffchainError;
};

export { useUpdateProtocol };
