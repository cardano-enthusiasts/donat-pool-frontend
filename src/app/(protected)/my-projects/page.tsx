'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { useAppSelector } from '@/redux/hooks';
import { MyProjects } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

const Page = () => {
  const router = useRouter();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);

  useEffect(() => {
    document.title = 'My projects';
  }, []);

  if (connectWalletStatus !== 'success') {
    return;
  }

  return (
    <Common>
      <MyProjects
        onCreateAProjectClick={() => {
          router.push(ROUTES.newFundraising);
        }}
      />
    </Common>
  );
};

export default Page;
