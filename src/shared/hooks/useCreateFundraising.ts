import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setCreatedPath } from '@/redux/slices/fundraisingCreation';
import { createConnectionParameters, logOffchainError } from '@/shared/helpers';
import { useAppSelector, useAppDispatch } from '@/shared/hooks';
import { useDonatPool, useFundraisings, useUserFundraisings } from '@/shared/hooks';
import type { BackendProject } from '@/shared/types/backend';

import useHandleError from './useHandleError';

const useCreateFundraising = () => {
  const offchain = useDonatPool();
  const activeWalletCardanoKey = useAppSelector((state) => state.cardano.activeWalletCardanoKey);
  const dispatch = useAppDispatch();
  const { refetchFundraisings } = useFundraisings();
  const { refetchFundraisings: refetchUserFundraisings } = useUserFundraisings();
  const handleCommonError = useHandleError();

  const handleSuccess = (fundraisingData: BackendProject) => {
    dispatch(setCreatedPath(fundraisingData.threadTokenCurrency));
    dispatch(setWalletStatus('connected'));
    refetchFundraisings();
    refetchUserFundraisings();
  };

  const handleError = (error: string) => {
    console.error('createFundraising:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain && activeWalletCardanoKey) {
    return (createFundraisingParams: any) => {
      offchain.createFundraising(handleSuccess)(handleError)(JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL))(
        createConnectionParameters(activeWalletCardanoKey),
      )(createFundraisingParams)();
      dispatch(setRequesting());
    };
  }

  return () => logOffchainError;
};

export default useCreateFundraising;
