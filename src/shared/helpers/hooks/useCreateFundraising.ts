import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  create,
  createFail,
  createSuccess,
} from 'features/fundraising/redux/actionCreators';
import { protocol } from 'shared/constants';
import { useOffchain, useGetUserFundraisings } from 'shared/helpers/hooks';

import { getOffchainError } from '..';

const useCreateFundraising = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getUserFundraisings = useGetUserFundraisings();

  const handleSuccess = (fundraisingData) => {
    toast.success('The fundraising was created successfully');
    dispatch(createSuccess());
    getUserFundraisings();
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(createFail(error));
  };

  if (offchain) {
    return (createFundraisingParams) => {
      offchain.createFundraising(handleSuccess)(handleError)(protocol)(
        createFundraisingParams
      )();
      dispatch(create());
    };
  }
  return () => getOffchainError;
};

export { useCreateFundraising };
