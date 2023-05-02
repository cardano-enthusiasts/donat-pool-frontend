import { useDispatch } from 'react-redux';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';

import { useGetAppInfo, useHandleError, useOffchain } from './';
import { getOffchainError } from '../';

const useConnectWallet = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const handleCommonError = useHandleError();
  const getAppInfo = useGetAppInfo();

  const handleSuccess = () => {
    dispatch(setWalletStatusSuccess('connected'));
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
