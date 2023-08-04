'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { MyProjects } from '@/shared/components';
import { useGetUserFundraisings, useOffchain } from '@/shared/helpers/hooks';
import { useAppSelector } from '@/store/hooks';

const PrivateProjects = () => {
  const router = useRouter();
  const offchain = useOffchain();
  const getUserFundraisings = useGetUserFundraisings();
  const { mode, status } = useAppSelector((state) => state.wallet);

  useEffect(() => {
    document.title = 'My projects';
  }, []);

  useEffect(() => {
    if (offchain && mode === 'connected') {
      getUserFundraisings();
    }
  }, [offchain, mode]);

  return status === 'requesting' ? (
    <></>
  ) : (
    <Common>
      <MyProjects
        onCreateAProjectClick={() => {
          router.push('/new-project');
        }}
      />
    </Common>
  );
};

export default PrivateProjects;
