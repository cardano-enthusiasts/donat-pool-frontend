import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

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

const useDonate = (onAnyResult) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getAllFundraisings = useGetAllFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();

  const handleSuccess = () => {
    dispatch(setWalletStatusSuccess('connected'));
    toast.success('Donated successfully');
    onAnyResult();
    dispatch(donateSuccess());
    getAllFundraisings();
  };

  const handleError = (error) => {
    handleCommonError(error);
    onAnyResult();
    dispatch(donateFail(error));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(fundraisingData)(
        amount * 1000000
      )();
      checkWalletStatus();
      dispatch(donate());
    };
  }
  return () => getOffchainError;
};

export { useDonate };
