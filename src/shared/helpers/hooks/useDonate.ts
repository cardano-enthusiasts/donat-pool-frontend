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

const useDonate = (onAnyResult) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getAllFundraisings = useGetAllFundraisings();

  const handleSuccess = () => {
    toast.success('Donated successfully');
    onAnyResult();
    dispatch(donateSuccess());
    getAllFundraisings();
  };

  const handleError = (error) => {
    toast.error(error);
    onAnyResult();
    dispatch(donateFail(error));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(fundraisingData)(
        amount * 1000000
      )();
      dispatch(donate());
    };
  }
  return () => getOffchainError;
};

export { useDonate };
