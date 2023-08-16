'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { ProjectCreation } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAppSelector } from '@/shared/hooks';

const Page = () => {
  const router = useRouter();
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);

  useEffect(() => {
    document.title = 'New project';
  }, []);

  if (connectWalletStatus !== 'success') {
    return;
  }

  return (
    <Common>
      <ProjectCreation
        onClose={() => {
          router.push(ROUTES.userFundraisings);
        }}
      />
    </Common>
  );
};

export default Page;
