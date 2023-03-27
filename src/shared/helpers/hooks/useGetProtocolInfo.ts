import { useDispatch } from 'react-redux';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import {
  getInfo,
  getInfoFail,
  getInfoSuccess,
} from 'features/protocol/redux/actionCreators';
import { protocol } from 'shared/constants';
import { type BackendParams } from 'shared/types';

import { useCheckWalletStatus, useHandleError, useOffchain } from './';
import { getOffchainError } from '..';

const useGetProtocolInfo = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();

  const handleSuccess = ({
    minAmountParam,
    maxAmountParam,
    minDurationParam,
    maxDurationParam,
    protocolFeeParam,
  }: BackendParams) => {
    dispatch(setWalletStatusSuccess('connected'));
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
    handleCommonError(error);
    dispatch(getInfoFail(error));
  };

  if (offchain) {
    return () => {
      offchain?.getProtocolInfo(handleSuccess)(handleError)(protocol)();
      checkWalletStatus();
      dispatch(getInfo());
    };
  }
  return getOffchainError;
};

export { useGetProtocolInfo };
