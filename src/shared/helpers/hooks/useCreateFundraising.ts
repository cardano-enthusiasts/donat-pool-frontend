import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  createFundraising,
  createFundraisingFail,
  createFundraisingSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';
import { useOffchain, useGetUserFundraisings } from 'shared/helpers/hooks';

import { getOffchainError } from '..';

const useCreateFundraising = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getUserFundraisings = useGetUserFundraisings();

  const handleSuccess = (fundraisingData) => {
    console.log(fundraisingData);
    toast.success('The fundraising was created successfully');
    dispatch(createFundraisingSuccess());
    getUserFundraisings();
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(createFundraisingFail(error));
  };

  if (offchain) {
    return (createFundraisingParams) => {
      offchain.createFundraising(handleSuccess)(handleError)(protocol)(
        createFundraisingParams
      )();
      dispatch(createFundraising());
    };
  }
  return () => getOffchainError;
};

export { useCreateFundraising };
