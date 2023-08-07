'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { ProjectCreation } from '@/shared/components';
import { useAuthGuard } from '@/shared/hooks';
import { useAppSelector } from '@/store/hooks';

const NewProject = () => {
  useAuthGuard();
  const router = useRouter();
  const connectWalletStatus = useAppSelector(
    (state) => state.connectWallet.status,
  );

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
          router.push('/my-projects');
        }}
      />
    </Common>
  );
};

export default NewProject;
