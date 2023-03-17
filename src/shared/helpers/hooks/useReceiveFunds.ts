import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  receiveFunds,
  receiveFundsFail,
  receiveFundsSuccess,
} from 'features/fundraising/redux/actionCreators';
import { useGetUserFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type FundraisingData } from 'shared/types';

import { getOffchainError } from '..';

const useReceiveFunds = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getUserFundraisings = useGetUserFundraisings();

  const handleSuccess = () => {
    toast.success('Received successfully');
    dispatch(receiveFundsSuccess());
    getUserFundraisings();
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(receiveFundsFail(error));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(fundraisingData)();
      dispatch(receiveFunds());
    };
  }
  return () => getOffchainError;
};

export { useReceiveFunds };
