import { testnetNami } from 'shared/constants/wallet';
import {
  type CreateFundraisingParams,
  type BackendProject,
} from 'shared/types';
import { useAppDispatch } from 'store/hooks';
import {
  setError,
  setRequesting,
  setCreatedPath,
} from 'store/slices/fundraisingCreation';
import { setWalletMode } from 'store/slices/wallet';

import {
  useOffchain,
  useGetUserFundraisings,
  useHandleError,
  useCheckWalletStatus,
} from '..';
import { getOffchainError } from '../..';

const useCreateFundraising = () => {
  const offchain = useOffchain();
  const dispatch = useAppDispatch();
  const getUserFundraisings = useGetUserFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = (fundraisingData: BackendProject) => {
    dispatch(setCreatedPath(fundraisingData.threadTokenCurrency));
    dispatch(setWalletMode('connected'));
    getUserFundraisings();
  };

  const handleError = (error) => {
    console.error('createFundraising:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (createFundraisingParams: CreateFundraisingParams) => {
      offchain.createFundraising(handleSuccess)(handleError)(protocol)(
        testnetNami,
      )(createFundraisingParams)();
      checkWalletStatus();
      dispatch(setRequesting());
    };
  }
  return () => getOffchainError;
};

export { useCreateFundraising };
