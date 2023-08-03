import { useAppDispatch } from 'core/hooks';
import { setWalletMode } from 'core/slices/wallet';
import { testnetNami } from 'shared/constants/wallet';

import { useGetAppInfo, useHandleError, useOffchain } from '..';
import { getOffchainError } from '../..';

const useConnectWallet = () => {
  const offchain = useOffchain();
  const dispatch = useAppDispatch();
  const handleCommonError = useHandleError();
  const getAppInfo = useGetAppInfo();

  const handleSuccess = () => {
    dispatch(setWalletMode('connected'));
    getAppInfo();
  };

  const handleError = (error) => {
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
