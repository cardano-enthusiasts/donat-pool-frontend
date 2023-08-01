import { useDispatch } from 'react-redux';

import { setError, setStatus } from 'core/slices/fundsReceiving';
import { updateWalletMode } from 'core/slices/wallet';
import { type FundraisingData } from 'shared/types';

import {
  useCheckWalletStatus,
  useGetUserFundraisings,
  useHandleError,
  useOffchain,
} from '..';
import { getOffchainError } from '../..';

const useReceiveFunds = ({ onSuccess, onError }) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getUserFundraisings = useGetUserFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = () => {
    dispatch(setStatus('success'));
    dispatch(updateWalletMode('connected'));
    getUserFundraisings();
    onSuccess();
  };

  const handleError = (error) => {
    onError();
    handleCommonError(error);
    dispatch(setError(error));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData) => {
      offchain.receiveFunds(handleSuccess)(handleError)(protocol)(
        fundraisingData,
      )();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return () => getOffchainError;
};

export { useReceiveFunds };
