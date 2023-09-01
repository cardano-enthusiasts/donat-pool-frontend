import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setError, setRequesting, setProtocol, setUserInfo } from '@/redux/slices/appInfo';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useOffchain, useHandleError } from '@/shared/hooks';
import { type UserAndProtocolParams, type Protocol } from '@/shared/types';

function useGetAppInfo() {
  const offchain = useOffchain();
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
  const dispatch = useAppDispatch();
  const handleCommonError = useHandleError();

  function handleSuccess({ protocolConfig, userInfo }: UserAndProtocolParams) {
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
  }

  function handleError(error: string) {
    console.error('useGetAppInfo:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  }

  if (offchain && activeWalletCardanoKey) {
    return () => {
      offchain?.getAppInfo(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol)(
        createConnectionParameters(activeWalletCardanoKey),
      )();
      dispatch(setRequesting());
    };
  }

  return logOffchainError;
}

export default useGetAppInfo;
