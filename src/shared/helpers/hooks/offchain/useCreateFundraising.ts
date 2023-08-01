import { useDispatch } from 'react-redux';

import { setError, setStatus } from 'core/slices/fundraisingCreating';
import { updateWalletMode } from 'core/slices/wallet';
import { testnetNami } from 'shared/constants/wallet';
import { type Fundraising, type CreateFundraisingParams } from 'shared/types';

import {
  useOffchain,
  useGetUserFundraisings,
  useHandleError,
  useCheckWalletStatus,
} from '..';
import { getOffchainError } from '../..';

const useCreateFundraising = (onSuccess, onError) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getUserFundraisings = useGetUserFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = (fundraisingData: Fundraising) => {
    dispatch(updateWalletMode('connected'));
    onSuccess(fundraisingData.threadTokenCurrency);
    dispatch(setStatus('success'));
    getUserFundraisings();
  };

  const handleError = (error) => {
    handleCommonError(error);
    onError();
    dispatch(setError(error));
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
