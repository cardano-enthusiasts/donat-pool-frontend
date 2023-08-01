import { useSelector, useDispatch } from 'react-redux';

import { setWalletStatus } from '@/features/info/redux/actionCreators';
import { type AppReduxState } from '@/shared/types';

const useCheckWalletStatus = () => {
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data,
  );
  const dispatch = useDispatch();
  return () => {
    if (walletStatus === 'declined' || walletStatus === 'default') {
      dispatch(setWalletStatus());
    }
  };
};

export { useCheckWalletStatus };
