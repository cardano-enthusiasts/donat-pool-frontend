'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { MyProjects } from '@/shared/components';
import { useAuthGuard } from '@/shared/hooks';
import { useAppSelector } from '@/store/hooks';

const Page = () => {
  useAuthGuard();
  const router = useRouter();
  const {
    connectWallet: { status: connectWalletStatus },
  } = useAppSelector((state) => state);

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
          router.push('/new-project');
        }}
      />
    </Common>
  );
};

export default Page;
