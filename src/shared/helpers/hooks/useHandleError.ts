import { useDispatch } from 'react-redux';

import { setWalletStatusSuccess } from 'features/info/redux/actionCreators';
import {
  errors,
  walletDisconnect,
  walletIsNotAvailable,
} from 'shared/constants';

const useHandleError = () => {
  const dispatch = useDispatch();

  return (backendError: string) => {
    switch (backendError) {
      case walletDisconnect:
        dispatch(setWalletStatusSuccess('declined'));
        setTimeout(() => {
          console.error(errors[walletDisconnect]);
        }, 500);
        break;
      case walletIsNotAvailable:
        dispatch(setWalletStatusSuccess('notAvailable'));
        break;
      default:
        console.log(errors[backendError]);
    }
  };
};
export { useHandleError };
