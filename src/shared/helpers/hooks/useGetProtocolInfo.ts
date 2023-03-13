import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getProtocolInfo,
  getProtocolInfoFail,
  getProtocolInfoSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';
import { useOffchain } from 'shared/helpers/hooks';
import { type BackendParams } from 'shared/types';

import { getOffchainError } from '..';

const useGetProtocolInfo = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();

  const handleSuccess = ({
    minAmountParam,
    maxAmountParam,
    minDurationParam,
    maxDurationParam,
    protocolFeeParam,
  }: BackendParams) => {
    dispatch(
      getProtocolInfoSuccess({
        minAmountParam: Number(minAmountParam.value),
        maxAmountParam: Number(maxAmountParam.value),
        minDurationParam: Number(minDurationParam.value),
        maxDurationParam: Number(maxDurationParam.value),
        protocolFeeParam: Number(protocolFeeParam.value),
      })
    );
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(getProtocolInfoFail(error));
  };

  if (offchain) {
    return () => {
      offchain?.getProtocolInfo(handleSuccess)(handleError)(protocol)();
      dispatch(getProtocolInfo());
    };
  }
  return getOffchainError;
};

export { useGetProtocolInfo };
