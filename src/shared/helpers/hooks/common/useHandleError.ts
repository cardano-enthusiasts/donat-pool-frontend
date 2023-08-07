import {
  errors,
  missingCollateral,
  walletDisconnect,
  walletIsNotAvailable,
} from '@/shared/constants';
import { useAppDispatch } from '@/store/hooks';
import { setWalletStatus } from '@/store/slices/connectWallet';

const useHandleError = () => {
  const dispatch = useAppDispatch();

  return (backendError: string): string => {
    switch (backendError) {
      case walletDisconnect:
        dispatch(setWalletStatus('declined'));
        setTimeout(() => {
          console.error(errors[walletDisconnect]);
        }, 500);
        return errors[walletDisconnect];
      case walletIsNotAvailable:
        dispatch(setWalletStatus('notAvailable'));
        return errors[walletIsNotAvailable];
      case missingCollateral:
        dispatch(setWalletStatus('missingCollateral'));
        return errors[missingCollateral];
      default:
        return backendError;
    }
  };
};
export { useHandleError };
