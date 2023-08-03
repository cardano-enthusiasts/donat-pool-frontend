import { useAppDispatch } from 'core/hooks';
import { setError, setStatus } from 'store/slices/fundsReceiving';
import { setWalletMode } from 'store/slices/wallet';
import { testnetNami } from 'shared/constants/wallet';
import { type FundraisingData } from 'shared/types';

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
    dispatch(setStatus('success'));
    dispatch(setWalletMode('connected'));
    getUserFundraisings();
  };

  const handleError = (error) => {
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(protocol)(testnetNami)(
        fundraisingData,
      )();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return () => getOffchainError;
};

export { useReceiveFunds };
