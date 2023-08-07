import { testnetNami } from '@/shared/constants/wallet';
import { useDonatPool } from '@/shared/hooks';
import { useAppDispatch } from '@/store/hooks';
import { setWalletStatus } from '@/store/slices/connectWallet';

import { useGetAppInfo, useHandleError } from '..';
import { getOffchainError } from '../..';

const useConnectWallet = () => {
  const offchain = useDonatPool();
  const dispatch = useAppDispatch();
  const handleCommonError = useHandleError();
  const getAppInfo = useGetAppInfo();

  const handleSuccess = () => {
    dispatch(setWalletStatus('connected'));
    getAppInfo();
  };

  const handleError = (error: string) => {
    console.error('connectWallet:', error);
    handleCommonError(error);
  };

  if (offchain) {
    return () => {
      offchain.connectWallet(handleSuccess)(handleError)(testnetNami)();
    };
  }
  return () => getOffchainError;
};

export { useConnectWallet };
