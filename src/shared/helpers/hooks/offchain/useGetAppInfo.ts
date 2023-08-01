import { useDispatch } from 'react-redux';

import {
  setError,
  setStatus,
  updateProtocol,
  updateUserInfo,
} from 'core/slices/appInfo';
import { updateWalletMode } from 'core/slices/wallet';
import { type UserAndProtocolParams } from 'shared/types';

import { useCheckWalletStatus, useHandleError, useOffchain } from '..';
import { getOffchainError } from '../..';

const useGetAppInfo = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = ({
    protocolConfig,
    userInfo,
  }: UserAndProtocolParams) => {
    dispatch(updateWalletMode('connected'));
    const {
      minAmountParam,
      maxAmountParam,
      minDurationParam,
      maxDurationParam,
      protocolFeeParam,
    } = protocolConfig;
    dispatch(
      updateProtocol({
        minAmountParam: Number(minAmountParam.value) / 1000000,
        maxAmountParam: Number(maxAmountParam.value) / 1000000,
        minDurationParam: Number(minDurationParam.value),
        maxDurationParam: Number(maxDurationParam.value),
        protocolFeeParam: Number(protocolFeeParam.value),
      }),
    );
    dispatch(updateUserInfo(userInfo));
    setStatus('success');
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(setError(error));
  };

  if (offchain) {
    return () => {
      offchain?.getAppInfo(handleSuccess)(handleError)(protocol)();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return getOffchainError;
};

export { useGetAppInfo };
