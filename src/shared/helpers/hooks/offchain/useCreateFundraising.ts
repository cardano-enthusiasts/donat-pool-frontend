import { useDispatch } from 'react-redux';

import {
  setError,
  setStatus,
  updateCreatedPath,
} from 'core/slices/fundraisingCreating';
import { updateWalletMode } from 'core/slices/wallet';
import { testnetNami } from 'shared/constants/wallet';
import {
  type CreateFundraisingParams,
  type BackendProject,
} from 'shared/types';

import {
  useOffchain,
  useGetUserFundraisings,
  useHandleError,
  useCheckWalletStatus,
} from '..';
import { getOffchainError } from '../..';

const useCreateFundraising = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getUserFundraisings = useGetUserFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = (fundraisingData: BackendProject) => {
    dispatch(updateCreatedPath(fundraisingData.threadTokenCurrency));
    dispatch(updateWalletMode('connected'));
    dispatch(setStatus('success'));
    getUserFundraisings();
  };

  const handleError = (error) => {
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (createFundraisingParams: CreateFundraisingParams) => {
      offchain.createFundraising(handleSuccess)(handleError)(protocol)(
        testnetNami,
      )(createFundraisingParams)();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return () => getOffchainError;
};

export { useCreateFundraising };
