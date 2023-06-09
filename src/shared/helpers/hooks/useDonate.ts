import { useDispatch } from 'react-redux';

import {
  donate,
  donateFail,
  donateSuccess,
} from 'features/fundraising/redux/actionCreators';
import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import { type FundraisingData } from 'shared/types';

import {
  useCheckWalletStatus,
  useGetAllFundraisings,
  useHandleError,
  useOffchain,
} from './';
import { getOffchainError } from '..';

const useDonate = ({ onSuccess, onError }) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getAllFundraisings = useGetAllFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = () => {
    dispatch(setWalletStatusSuccess('connected'));

    dispatch(donateSuccess());
    getAllFundraisings();
    onSuccess();
  };

  const handleError = (error) => {
    handleCommonError(error);
    onError();
    dispatch(donateFail(error));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(protocol)(fundraisingData)(
        amount
      )();
      checkWalletStatus();
      dispatch(donate());
    };
  }
  return () => getOffchainError;
};

export { useDonate };
