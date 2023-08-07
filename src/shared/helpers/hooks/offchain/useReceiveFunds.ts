import { testnetNami } from 'shared/constants/wallet';
import { type FundraisingData } from 'shared/types';
import { useAppDispatch } from 'store/hooks';
import {
  setError,
  setSuccess,
  setRequesting,
} from 'store/slices/fundsReceiving';
import { setWalletMode } from 'store/slices/wallet';

import {
  useCheckWalletStatus,
  useGetUserFundraisings,
  useHandleError,
  useOffchain,
} from '..';
import { getOffchainError } from '../..';

const useReceiveFunds = () => {
  const offchain = useOffchain();
  const dispatch = useAppDispatch();
  const getUserFundraisings = useGetUserFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = () => {
    dispatch(setSuccess());
    dispatch(setWalletMode('connected'));
    getUserFundraisings();
  };

  const handleError = (error) => {
    console.error('receiveFunds:', error);
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(protocol)(testnetNami)(
        fundraisingData,
      )();
      checkWalletStatus();
      dispatch(setRequesting());
    };
  }
  return () => getOffchainError;
};

export { useReceiveFunds };
