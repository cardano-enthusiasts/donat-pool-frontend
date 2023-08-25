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

  return (
    <Common>
      <ProjectCreation
        onClose={() => {
          router.push(ROUTES.userFundraisings);
        }}
      />
    </Common>
  );
}

export default Page;
