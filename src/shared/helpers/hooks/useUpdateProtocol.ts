import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  update,
  updateFail,
  updateSuccess,
} from 'features/protocol/redux/actionCreators';
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
    dispatch(updateSuccess());
    getProtocolInfo();
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(updateFail(error));
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
      dispatch(update());
    };
  }
  return () => getOffchainError;
};

export { useUpdateProtocol };
