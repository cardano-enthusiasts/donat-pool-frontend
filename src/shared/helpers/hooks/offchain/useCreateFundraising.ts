import { testnetNami } from '@/shared/constants/wallet';
import { useDonatPool } from '@/shared/hooks';
import { type BackendProject } from '@/shared/types/backend';
import { useAppDispatch } from '@/store/hooks';
import { setWalletStatus } from '@/store/slices/connectWallet';
import {
  setError,
  setRequesting,
  setCreatedPath,
} from '@/store/slices/fundraisingCreation';

import { useGetUserFundraisings, useHandleError } from '..';
import { getOffchainError } from '../..';

const useCreateFundraising = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const getUserFundraisings = useGetUserFundraisings();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);

  const handleSuccess = (fundraisingData: BackendProject) => {
    dispatch(setCreatedPath(fundraisingData.threadTokenCurrency));
    dispatch(setWalletStatus('connected'));
    getUserFundraisings();
  };

  const handleError = (error) => {
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (createFundraisingParams: any) => {
      offchain.createFundraising(handleSuccess)(handleError)(protocol)(
        testnetNami,
      )(createFundraisingParams);
      dispatch(setRequesting());
    };
  }
  return () => getOffchainError;
};

export { useCreateFundraising };
