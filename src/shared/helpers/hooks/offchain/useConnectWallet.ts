import { useDispatch } from 'react-redux';

import { updateWalletStatus } from 'core/slices/walletStatus';

import { useGetAppInfo, useHandleError, useOffchain } from '..';
import { getOffchainError } from '../..';

const useConnectWallet = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const getAppInfo = useGetAppInfo();

  const handleSuccess = () => {
    dispatch(updateWalletStatus('connected'));
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
