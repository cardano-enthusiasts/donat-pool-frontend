import { useDispatch } from 'react-redux';

import { useAppSelector } from 'core/hooks';
import { setStatus } from 'core/slices/wallet';

const useCheckWalletStatus = () => {
  const walletStatus = useAppSelector((state) => state.wallet.mode);
  const dispatch = useDispatch();
  return () => {
    if (walletStatus === 'declined' || walletStatus === 'default') {
      dispatch(setStatus('requesting'));
    }
  };
};

export { useCheckWalletStatus };
