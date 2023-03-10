import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  createFundraising,
  createFundraisingFail,
  createFundraisingSuccess,
} from 'features/info/redux/actionCreators';
import { protocol } from 'shared/constants';
import { useOffchain } from 'shared/helpers/hooks';

import { getOffchainError } from '../getOffchainError';

const useCreateFundraising = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();

  const handleSuccess = (fundraisingData) => {
    console.log(fundraisingData);
    toast.success('The fundraising was created successfully');
    createFundraisingSuccess();
  };

  const handleError = (error) => {
    toast.error(error);
    createFundraisingFail(error);
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
