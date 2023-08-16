import { setError, setRequesting, setProtocol, setUserInfo } from '@/redux/slices/appInfo';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { testnetNami } from '@/shared/constants';
import { logOffchainError } from '@/shared/helpers';
import { useAppDispatch } from '@/shared/hooks';
import { useDonatPool } from '@/shared/hooks';
import type { UserAndProtocolParams } from '@/shared/types/backend';

import useHandleError from './useHandleError';

const useGetAppInfo = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const handleCommonError = useHandleError();

  const handleSuccess = ({ protocolConfig, userInfo }: UserAndProtocolParams) => {
    dispatch(setWalletStatus('connected'));
    const { minAmountParam, maxAmountParam, minDurationParam, maxDurationParam, protocolFeeParam } = protocolConfig;
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

  const handleError = (error: string) => {
    console.error('useGetAppInfo:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return () => {
      offchain?.getAppInfo(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL))(testnetNami)();
      dispatch(setRequesting());
    };
  }

  return logOffchainError;
};

export default useGetAppInfo;
