'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { MyProjects } from '@/shared/components';
import { useGetUserFundraisings } from '@/shared/helpers/hooks';
import { useAppSelector } from '@/store/hooks';

const PrivateProjects = () => {
  const router = useRouter();
  const getUserFundraisings = useGetUserFundraisings();
  const { status } = useAppSelector((state) => state.connectWallet);

  useEffect(() => {
    document.title = 'My projects';
  }, []);

  useEffect(() => {
    if (status === 'success') {
      getUserFundraisings();
    }
  }, [status]);

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
