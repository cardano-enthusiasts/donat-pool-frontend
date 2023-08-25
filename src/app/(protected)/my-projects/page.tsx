'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Common } from '@/layouts';
import { MyProjects } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

function Page() {
  const router = useRouter();

  useEffect(() => {
    document.title = 'My projects';
  }, []);

  return (
    <Common>
      <MyProjects
        onCreateAProjectClick={() => {
          router.push(ROUTES.newFundraising);
        }}
      />
    </Common>
  );
}

export default Page;
