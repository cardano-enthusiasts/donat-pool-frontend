import { useAppDispatch } from '@/redux/hooks';
import { setError, setRequesting, setProtocol, setUserInfo } from '@/redux/slices/appInfo';
import { setWalletStatus } from '@/redux/slices/connectWallet';
import { convertLovelaceToADA, createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useOffchain, useHandleError, useCardano } from '@/shared/hooks';
import type { UserAndProtocolParams, Protocol } from '@/shared/types';

function useGetAppInfo() {
  const offchain = useOffchain();
  const { connectedWalletCardanoKey } = useCardano();
  const dispatch = useAppDispatch();
  const handleCommonError = useHandleError();

  function handleSuccess({ protocolConfig, userInfo }: UserAndProtocolParams) {
    dispatch(setWalletStatus('connected'));
    const { minAmountParam, maxAmountParam, minDurationParam, maxDurationParam, protocolFeeParam } = protocolConfig;
    dispatch(
      setProtocol({
        minAmountParam: convertLovelaceToADA(minAmountParam.value),
        maxAmountParam: convertLovelaceToADA(maxAmountParam.value),
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

  if (offchain && connectedWalletCardanoKey) {
    return () => {
      offchain?.getAppInfo(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL) as Protocol)(
        createConnectionParameters(connectedWalletCardanoKey),
      )();
      dispatch(setRequesting());
    };
  }

  return logOffchainError;
}

export default useGetAppInfo;
