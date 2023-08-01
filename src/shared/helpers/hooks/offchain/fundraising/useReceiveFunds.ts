import { useDispatch } from 'react-redux';

import {
  receiveFunds,
  receiveFundsFail,
  receiveFundsSuccess,
} from '@/features/fundraising/redux/actionCreators';
import { setWalletStatusSuccess } from '@/features/info/redux/actionCreators';
import { type FundraisingData } from '@/shared/types';

import {
  useCheckWalletStatus,
  useGetUserFundraisings,
  useHandleError,
  useOffchain,
} from '../..';
import { getOffchainError } from '../../..';

const useReceiveFunds = ({ onSuccess, onError }) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getUserFundraisings = useGetUserFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = () => {
    dispatch(receiveFundsSuccess());
    dispatch(setWalletStatusSuccess('connected'));
    getUserFundraisings();
    onSuccess();
  };

  const handleError = (error) => {
    onError();
    handleCommonError(error);
    dispatch(receiveFundsFail(error));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(protocol)(
        fundraisingData,
      )();
      checkWalletStatus();
      dispatch(receiveFunds());
    };
  }
  return () => getOffchainError;
};

export { useReceiveFunds };
