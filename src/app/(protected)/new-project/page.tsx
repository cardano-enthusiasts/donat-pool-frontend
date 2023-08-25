'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { ProjectCreation } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

function Page() {
  const router = useRouter();

  useEffect(() => {
    document.title = 'New project';
  }, []);

  function handleProjectCreationClose() {
    router.push(ROUTES.userFundraisings);
  }

  return (
    <Common>
      <ProjectCreation onClose={handleProjectCreationClose} />
    </Common>
  );
}

export default Page;
