import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import {
  setRequestStatus as setConnectWalletStatus,
  setError as setConnectWalletError,
} from '@/redux/slices/connectWallet';
import { testnetNami } from '@/shared/constants';
import { useDonatPool } from '@/shared/hooks';

const WalletButton = () => {
  const donatPool = useDonatPool();
  const userInfo = useAppSelector((state) => state.appInfo.userInfo);
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);
  const dispatch = useAppDispatch();
  const [isAddressShown, setIsAddressShown] = useState(false);
  const walletConnected = connectWalletStatus === 'success';

  const handleWalletConnectSuccess = () => {
    dispatch(setConnectWalletStatus('success'));
  };

  const handleWalletConnectFailure = (error: string) => {
    console.error('connectWallet:', error);
    dispatch(setConnectWalletError(error));
  };

  return (
    <div
      className="relative flex items-center max-md:justify-center"
      onMouseEnter={() => {
        setIsAddressShown(true);
      }}
      onMouseLeave={() => {
        setIsAddressShown(false);
      }}
    >
      <button
        className="before:content-url('/icons/paper-clip.svg') flex cursor-pointer items-center gap-[0.375rem] bg-transparent text-[0.75rem] font-bold leading-3 text-white before:h-[1.375rem]"
        onClick={() => {
          if (!walletConnected) {
            donatPool?.connectWallet(handleWalletConnectSuccess)(handleWalletConnectFailure)(testnetNami)();
          }
        }}
      >
        {walletConnected ? 'Wallet connected' : 'Connect wallet'}
      </button>
      {userInfo?.address && isAddressShown && (
        <div className="text-gray drop-shadow-[0 0.125rem 0.9375rem rgba(71, 87, 230, 0.4)] absolute right-0 mt-1 rounded-[0.375rem] bg-white p-4 before:absolute  before:left-0  before:right-0 before:top-[-1rem] before:w-4 before:content-[url('/icons/tooltip-symmetric.svg')] max-md:left-0  max-md:right-0  max-md:top-[1.875rem] max-md:mx-auto max-md:my-0 max-md:text-center">{`${String(
          userInfo.address.substring(0, 6),
        )} ... ${String(userInfo.address.substring(userInfo.address.length - 4))}`}</div>
      )}
    </div>
  );
};

export { WalletButton };
