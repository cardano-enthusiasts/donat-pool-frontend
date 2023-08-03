import {
  errors,
  missingCollateral,
  walletDisconnect,
  walletIsNotAvailable,
} from 'shared/constants';
import { useAppDispatch } from 'store/hooks';
import { setWalletMode } from 'store/slices/wallet';

const useHandleError = () => {
  const dispatch = useAppDispatch();

  return (backendError: string): string => {
    switch (backendError) {
      case walletDisconnect:
        dispatch(setWalletMode('declined'));
        setTimeout(() => {
          console.error(errors[walletDisconnect]);
        }, 500);
        return errors[walletDisconnect];
      case walletIsNotAvailable:
        dispatch(setWalletMode('notAvailable'));
        return errors[walletIsNotAvailable];
      case missingCollateral:
        dispatch(setWalletMode('missingCollateral'));
        return errors[missingCollateral];
      default:
        return errors[backendError];
    }
  };
};
export { useHandleError };
