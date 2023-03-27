import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  receiveFunds,
  receiveFundsFail,
  receiveFundsSuccess,
} from 'features/fundraising/redux/actionCreators';
import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import { type FundraisingData } from 'shared/types';

import {
  useCheckWalletStatus,
  useGetUserFundraisings,
  useHandleError,
  useOffchain,
} from './';
import { getOffchainError } from '..';

const useReceiveFunds = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getUserFundraisings = useGetUserFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();

  const handleSuccess = () => {
    toast.success('Received successfully');
    dispatch(receiveFundsSuccess());
    dispatch(setWalletStatusSuccess('connected'));
    getUserFundraisings();
  };

  const handleError = (error) => {
    handleCommonError(error);
    dispatch(receiveFundsFail(error));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(fundraisingData)();
      checkWalletStatus();
      dispatch(receiveFunds());
    };
  }
  return () => getOffchainError;
};

export { useReceiveFunds };
