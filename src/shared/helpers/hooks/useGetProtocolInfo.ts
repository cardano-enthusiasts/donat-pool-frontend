import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getInfo,
  getInfoFail,
  getInfoSuccess,
} from 'features/protocol/redux/actionCreators';
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
      getInfoSuccess({
        minAmountParam: Number(minAmountParam.value) / 1000000,
        maxAmountParam: Number(maxAmountParam.value) / 1000000,
        minDurationParam: Number(minDurationParam.value),
        maxDurationParam: Number(maxDurationParam.value),
        protocolFeeParam: Number(protocolFeeParam.value),
      })
    );
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(getInfoFail(error));
  };

  if (offchain) {
    return () => {
      offchain?.getProtocolInfo(handleSuccess)(handleError)(protocol)();
      dispatch(getInfo());
    };
  }
  return getOffchainError;
};

export { useGetProtocolInfo };
