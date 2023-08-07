import { testnetNami } from '@/shared/constants/wallet';
import { type FundraisingData } from '@/shared/types';
import { useAppDispatch } from '@/store/hooks';
import { setWalletStatus } from '@/store/slices/connectWallet';
import { setError, setRequesting, setSuccess } from '@/store/slices/donating';

import { useGetAllFundraisings, useHandleError, useDonatPool } from '..';
import { getOffchainError } from '../..';

const useDonate = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const getAllFundraisings = useGetAllFundraisings();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);

  const handleSuccess = () => {
    dispatch(setWalletStatus('connected'));
    dispatch(setSuccess());
    getAllFundraisings();
  };

  const handleError = (error) => {
    const filteredError = handleCommonError(error);
    dispatch(setError(filteredError));
  };

  if (offchain) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(handleSuccess)(handleError)(protocol)(testnetNami)(
        fundraisingData,
      )(amount)();
      dispatch(setRequesting());
    };
  }
  return () => getOffchainError;
};

export { useDonate };
