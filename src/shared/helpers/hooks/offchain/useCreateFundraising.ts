import { useDispatch } from 'react-redux';

import {
  create,
  createFail,
  createSuccess,
} from 'features/fundraising/redux/actionCreators';
import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
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
    dispatch(setWalletStatusSuccess('connected'));
    onSuccess(fundraisingData.path);
    dispatch(createSuccess());
    getUserFundraisings();
  };

  const handleError = (error) => {
    handleCommonError(error);
    onError();
    dispatch(createFail(error));
  };

  if (offchain) {
    return (createFundraisingParams: CreateFundraisingParams) => {
      offchain.createFundraising(handleSuccess)(handleError)(protocol)(
        createFundraisingParams
      )();
      checkWalletStatus();
      dispatch(create());
    };
  }
  return () => getOffchainError;
};

export { useCreateFundraising };
