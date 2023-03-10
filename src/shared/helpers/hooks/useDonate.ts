import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  donate,
  donateFail,
  donateSuccess,
} from 'features/info/redux/actionCreators';
import { useGetAllFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type FundraisingData } from 'shared/types';

import { getOffchainError } from '..';

const useDonate = (fundraisingData: FundraisingData, onSuccess) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getAllFundraisings = useGetAllFundraisings();

  const handleSuccess = () => {
    toast.success('Donated successfully');
    onSuccess();
    dispatch(donateSuccess());
    getAllFundraisings();
  };

  const handleError = (error) => {
    toast.error(error);
    dispatch(donateFail(error));
  };

  if (offchain) {
    return (amount: number) => {
      offchain.donate(handleSuccess)(handleError)(fundraisingData)(amount)();
      dispatch(donate());
    };
  }
  return () => getOffchainError;
};

export { useDonate };
