import { testnetNami } from 'shared/constants/wallet';
import { type FundraisingData } from 'shared/types';
import { useAppDispatch } from 'store/hooks';
import { setError, setRequesting, setSuccess } from 'store/slices/donating';
import { setWalletMode } from 'store/slices/wallet';

import {
  useCheckWalletStatus,
  useGetAllFundraisings,
  useHandleError,
  useOffchain,
} from '..';
import { getOffchainError } from '../..';

const useDonate = () => {
  const offchain = useOffchain();
  const dispatch = useAppDispatch();
  const getAllFundraisings = useGetAllFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = () => {
    dispatch(setWalletMode('connected'));
    dispatch(setSuccess());
    getAllFundraisings();
  };

  const handleError = (error) => {
    console.error('donate:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(protocol)(testnetNami)(
        fundraisingData,
      )(amount)();
      checkWalletStatus();
      dispatch(setRequesting());
    };
  }
  return () => getOffchainError;
};

export { useDonate };
