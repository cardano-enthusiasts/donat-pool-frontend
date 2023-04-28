import { useDispatch } from 'react-redux';

import {
  getUserInfo,
  getUserInfoFail,
  getUserInfoSuccess,
  setWalletStatusSuccess,
} from 'features/info/redux/actionCreators';
import {
  getInfo,
  getInfoFail,
  getInfoSuccess,
} from 'features/protocol/redux/actionCreators';
import { protocol } from 'shared/constants';
import { type UserAndProtocolParams } from 'shared/types';

import { useCheckWalletStatus, useHandleError, useOffchain } from '.';
import { getOffchainError } from '..';

const useGetAppInfo = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();

  const handleSuccess = ({
    protocolConfig,
    userInfo,
  }: UserAndProtocolParams) => {
    dispatch(setWalletStatusSuccess('connected'));
    const {
      minAmountParam,
      maxAmountParam,
      minDurationParam,
      maxDurationParam,
      protocolFeeParam,
    } = protocolConfig;
    dispatch(
      getInfoSuccess({
        minAmountParam: Number(minAmountParam.value) / 1000000,
        maxAmountParam: Number(maxAmountParam.value) / 1000000,
        minDurationParam: Number(minDurationParam.value),
        maxDurationParam: Number(maxDurationParam.value),
        protocolFeeParam: Number(protocolFeeParam.value),
      })
    );
    dispatch(getUserInfoSuccess(userInfo));
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(getInfoFail(error));
    dispatch(getUserInfoFail(error));
  };

  if (offchain) {
    return () => {
      offchain?.getAppInfo(handleSuccess)(handleError)(protocol)();
      checkWalletStatus();
      dispatch(getInfo());
      dispatch(getUserInfo());
    };
  }
  return getOffchainError;
};

export { useGetAppInfo };
