import { useDispatch } from 'react-redux';

import { updateWalletMode } from 'core/slices/wallet';

import { useGetAppInfo, useHandleError, useOffchain } from '..';
import { getOffchainError } from '../..';

const useConnectWallet = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const getAppInfo = useGetAppInfo();

  const handleSuccess = () => {
    dispatch(updateWalletMode('connected'));
    getAppInfo();
  };

  const handleError = (error) => {
    handleCommonError(error);
  };

  if (offchain) {
    return () => {
      offchain.connectWallet(handleSuccess)(handleError)();
    };
  }
  return () => getOffchainError;
};

export { useConnectWallet };
