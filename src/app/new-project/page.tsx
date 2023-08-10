'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { ProjectCreation } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAuthGuard } from '@/shared/hooks';
import { useAppSelector } from '@/store/hooks';

const Page = () => {
  useAuthGuard();
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
