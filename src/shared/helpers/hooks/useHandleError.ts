import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import { errors } from 'shared/constants/errors';

const useHandleError = () => {
  const dispatch = useDispatch();

  return (error: string) => {
    if (error === errors.walletDisconnect.backend) {
      dispatch(setWalletStatusSuccess('declined'));
      setTimeout(() => {
        toast.error(errors.walletDisconnect.pretty);
      }, 500);
    } else {
      toast.error(error);
    }
  };
};
export { useHandleError };
