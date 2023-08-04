import { testnetNami } from '@/shared/constants/wallet';
import { type UserAndProtocolParams } from '@/shared/types';
import { useAppDispatch } from '@/store/hooks';
import {
  setError,
  setRequesting,
  setProtocol,
  setUserInfo,
} from '@/store/slices/appInfo';
import { setWalletMode } from '@/store/slices/wallet';

import { useCheckWalletStatus, useHandleError, useOffchain } from '..';
import { getOffchainError } from '../..';

const useGetAppInfo = () => {
  const offchain = useOffchain();
  const dispatch = useAppDispatch();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();

  const handleSuccess = ({
    protocolConfig,
    userInfo,
  }: UserAndProtocolParams) => {
    dispatch(setWalletMode('connected'));
    const {
      minAmountParam,
      maxAmountParam,
      minDurationParam,
      maxDurationParam,
      protocolFeeParam,
    } = protocolConfig;
    dispatch(
      setProtocol({
        minAmountParam: Number(minAmountParam.value) / 1000000,
        maxAmountParam: Number(maxAmountParam.value) / 1000000,
        minDurationParam: Number(minDurationParam.value),
        maxDurationParam: Number(maxDurationParam.value),
        protocolFeeParam: Number(protocolFeeParam.value),
      }),
    );
    dispatch(setUserInfo(userInfo));
  };

  const handleError = (error) => {
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return () => {
      offchain?.getAppInfo(handleSuccess)(handleError)(
        JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL),
      )(testnetNami)();
      checkWalletStatus();
      dispatch(setRequesting());
    };
  }
  return getOffchainError;
};

export { useGetAppInfo };
