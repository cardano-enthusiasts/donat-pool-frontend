import { useDispatch } from 'react-redux';

import { useAppSelector } from 'core/hooks';
import { setStatus } from 'core/slices/walletStatus/walletStatus';

const useCheckWalletStatus = () => {
  const walletStatus = useAppSelector((state) => state.walletStatus.value);
  const dispatch = useDispatch();
  return () => {
    if (walletStatus === 'declined' || walletStatus === 'default') {
      dispatch(setStatus('requesting'));
    }
  };
};

export { useCheckWalletStatus };
