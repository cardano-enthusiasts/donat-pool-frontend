import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setRequesting } from 'store/slices/wallet';

const useCheckWalletStatus = () => {
  const walletStatus = useAppSelector((state) => state.wallet.mode);
  const dispatch = useAppDispatch();
  return () => {
    if (walletStatus === 'declined' || walletStatus === 'default') {
      dispatch(setRequesting());
    }
  };
};

export { useCheckWalletStatus };
