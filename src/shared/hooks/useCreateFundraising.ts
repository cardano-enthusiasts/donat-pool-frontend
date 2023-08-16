import { setWalletStatus } from '@/redux/slices/connectWallet';
import { setError, setRequesting, setCreatedPath } from '@/redux/slices/fundraisingCreation';
import { testnetNami } from '@/shared/constants';
import { logOffchainError } from '@/shared/helpers';
import { useAppDispatch } from '@/shared/hooks';
import { useDonatPool, useUserFundraisings } from '@/shared/hooks';
import type { BackendProject } from '@/shared/types/backend';

import useHandleError from './useHandleError';

const useCreateFundraising = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const { refetchFundraisings: refetchUserFundraisings } = useUserFundraisings();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);

  const handleSuccess = (fundraisingData: BackendProject) => {
    dispatch(setCreatedPath(fundraisingData.threadTokenCurrency));
    dispatch(setWalletStatus('connected'));
    refetchUserFundraisings();
  };

  const handleError = (error: string) => {
    console.error('createFundraising:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (createFundraisingParams: any) => {
      offchain.createFundraising(handleSuccess)(handleError)(protocol)(testnetNami)(createFundraisingParams)();
      dispatch(setRequesting());
    };
  }
  return () => logOffchainError;
};

export default useCreateFundraising;
