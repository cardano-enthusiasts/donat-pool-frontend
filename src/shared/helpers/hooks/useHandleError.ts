import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import {
  errors,
  walletDisconnect,
  walletIsNotAvailable,
} from 'shared/constants/errors';

const useHandleError = () => {
  const dispatch = useDispatch();

  return (backendError: string) => {
    switch (backendError) {
      case walletDisconnect:
        dispatch(setWalletStatusSuccess('declined'));
        setTimeout(() => {
          toast.error(errors[walletDisconnect]);
        }, 500);
        break;
      case walletIsNotAvailable:
        dispatch(setWalletStatusSuccess('notAvailable'));
        break;
      default:
        console.log(errors[backendError]);
        toast.error(errors[backendError]);
    }
  };
};
export { useHandleError };
