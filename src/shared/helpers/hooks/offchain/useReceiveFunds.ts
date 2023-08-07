import { testnetNami } from '@/shared/constants/wallet';
import { useDonatPool } from '@/shared/hooks';
import { useAppDispatch } from '@/store/hooks';
import { setWalletStatus } from '@/store/slices/connectWallet';
import {
  setError,
  setSuccess,
  setRequesting,
} from '@/store/slices/fundsReceiving';

import { useGetUserFundraisings, useHandleError } from '..';
import { getOffchainError } from '../..';

const useReceiveFunds = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const getUserFundraisings = useGetUserFundraisings();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);

  const handleSuccess = () => {
    dispatch(setSuccess());
    dispatch(setWalletStatus('connected'));
    getUserFundraisings();
  };

  const handleError = (error) => {
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (fundraisingData: any) => {
      offchain.receiveFunds(handleSuccess)(handleError)(protocol)(testnetNami)(
        fundraisingData,
      )();
      dispatch(setRequesting());
    };
  }
  return () => getOffchainError;
};

export { useReceiveFunds };
