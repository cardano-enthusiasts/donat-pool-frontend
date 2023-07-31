import { useDispatch } from 'react-redux';

import { setError, setStatus } from 'core/slices/donating';
import { updateWalletStatus } from 'core/slices/walletStatus';
import { type FundraisingData } from 'shared/types';

import {
  useCheckWalletStatus,
  useGetAllFundraisings,
  useHandleError,
  useOffchain,
} from '..';
import { getOffchainError } from '../..';

const useDonate = ({ onSuccess, onError }) => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getAllFundraisings = useGetAllFundraisings();
  const handleCommonError = useHandleError();
  const checkWalletStatus = useCheckWalletStatus();
  const protocol = JSON.parse(process.env.PROTOCOL);

  const handleSuccess = () => {
    dispatch(updateWalletStatus('connected'));

    dispatch(setStatus('success'));
    getAllFundraisings();
    onSuccess();
  };

  const handleError = (error) => {
    handleCommonError(error);
    onError();
    dispatch(setError(error));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(protocol)(fundraisingData)(
        amount,
      )();
      checkWalletStatus();
      dispatch(setStatus('requesting'));
    };
  }
  return () => getOffchainError;
};

export { useDonate };
