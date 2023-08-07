import { testnetNami } from '@/shared/constants/wallet';
import { useAllFundraisings, useDonatPool } from '@/shared/hooks';
import { type FundraisingData } from '@/shared/types/common';
import { useAppDispatch } from '@/store/hooks';
import { setWalletStatus } from '@/store/slices/connectWallet';
import { setError, setRequesting, setSuccess } from '@/store/slices/donating';

import { useHandleError } from '..';
import { getOffchainError } from '../..';

const useDonate = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const { refetchAllFundraisings } = useAllFundraisings();
  const handleCommonError = useHandleError();
  const protocol = JSON.parse(process.env.NEXT_PUBLIC_PROTOCOL);

  if (offchain) {
    return (fundraisingData: FundraisingData, amount: number) => {
      offchain.donate(() => {
        dispatch(setWalletStatus('connected'));
        dispatch(setSuccess());
        refetchAllFundraisings();
      })((error) => {
        const filteredError = handleCommonError(error);
        dispatch(setError(filteredError));
      })(protocol)(testnetNami)(fundraisingData)(amount);
      dispatch(setRequesting());
    };
  }
  return () => getOffchainError;
};

export { useDonate };
