import { useDispatch } from 'react-redux';

import { updateWalletMode } from 'core/slices/wallet';
import {
  errors,
  missingCollateral,
  walletDisconnect,
  walletIsNotAvailable,
} from 'shared/constants';

const useHandleError = () => {
  const dispatch = useDispatch();

  return (backendError: string): string => {
    switch (backendError) {
      case walletDisconnect:
        dispatch(updateWalletMode('declined'));
        setTimeout(() => {
          console.error(errors[walletDisconnect]);
        }, 500);
        return errors[walletDisconnect];
      case walletIsNotAvailable:
        dispatch(updateWalletMode('notAvailable'));
        return errors[walletIsNotAvailable];
      case missingCollateral:
        dispatch(updateWalletMode('missingCollateral'));
        return errors[missingCollateral];
      default:
        return errors[backendError];
    }
  };
};
export { useHandleError };
