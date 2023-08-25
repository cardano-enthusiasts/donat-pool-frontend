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

  function handleCreatenewProjectButtonClick() {
    router.push(ROUTES.newFundraising);
  }

  return (
    <Common>
      <MyProjects onCreateAProjectClick={handleCreatenewProjectButtonClick} />
    </Common>
  );
}

export default Page;
