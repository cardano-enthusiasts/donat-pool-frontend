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

  return (backendError: string) => {
    switch (backendError) {
      case walletDisconnect:
        dispatch(updateWalletMode('declined'));
        setTimeout(() => {
          console.error(errors[walletDisconnect]);
        }, 500);
        break;
      case walletIsNotAvailable:
        dispatch(updateWalletMode('notAvailable'));
        break;
      case missingCollateral:
        dispatch(updateWalletMode('missingCollateral'));
        break;
      default:
        console.log(errors[backendError]);
    }
  };
};
export { useHandleError };
