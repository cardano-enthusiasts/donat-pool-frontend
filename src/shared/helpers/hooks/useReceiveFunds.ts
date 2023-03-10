import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  receiveFunds,
  receiveFundsFail,
  receiveFundsSuccess,
} from 'features/info/redux/actionCreators';
import { type FundraisingData } from 'shared/types';

import { useOffchain } from '.';
import { getOffchainError } from '../getOffchainError';

const useReceiveFunds = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();

  const handleSuccess = () => {
    toast.success('Received successfully');
    dispatch(receiveFundsSuccess());
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
