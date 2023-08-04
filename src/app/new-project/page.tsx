'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { ProjectCreation } from '@/shared/components';
import { useAppSelector } from '@/store/hooks';

const NewProject = () => {
  const router = useRouter();

  const isRequesting =
    useAppSelector((state) => state.wallet.status) === 'requesting';

  useEffect(() => {
    document.title = 'New project';
  }, []);

  return isRequesting ? (
    <></>
  ) : (
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
