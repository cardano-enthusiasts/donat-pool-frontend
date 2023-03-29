import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import { errors, walletDisconnect } from 'shared/constants/errors';

const useHandleError = () => {
  const dispatch = useDispatch();

  return (backendError: string) => {
    if (backendError === walletDisconnect) {
      dispatch(setWalletStatusSuccess('declined'));
      setTimeout(() => {
        toast.error(errors[walletDisconnect]);
      }, 500);
    } else {
      console.log(errors[backendError]);
      toast.error(errors[backendError]);
    }
  };
};
export { useHandleError };
