import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getConfig,
  getConfigFail,
  getConfigSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';
import { useOffchain } from 'shared/helpers/hooks';
import { type BackendParams } from 'shared/types';

import { getOffchainError } from '../getOffchainError';

const useGetProtocolInfo = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig());
  }, [offchain?.getProtocolInfo]);

  const handleSuccess = (params: BackendParams) => {
    dispatch(
      getConfigSuccess({
        minAmountParam: Number(params.minAmountParam.value),
        maxAmountParam: Number(params.maxAmountParam.value),
        minDurationParam: Number(params.minDurationParam.value),
        maxDurationParam: Number(params.maxDurationParam.value),
        protocolFeeParam: Number(params.protocolFeeParam.value),
      })
    );
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(getConfigFail(error));
  };

  if (offchain) {
    return offchain?.getProtocolInfo(handleSuccess)(handleError)(protocol);
  }
  return getOffchainError;
};

export { useGetProtocolInfo };
