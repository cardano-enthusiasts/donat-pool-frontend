'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAppSelector } from '@/redux/hooks';
import { CreationForm, Project } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useGetAppInfo, useOffchain } from '@/shared/hooks';

function NewDonatPool() {
  const router = useRouter();
  const protocol = useAppSelector((state) => state.appInfo.protocol);
  const getAppInfo = useGetAppInfo();
  const offchain = useOffchain();

  useEffect(() => {
    if (offchain) {
      getAppInfo();
    }
  }, [offchain]);

  function handleClose() {
    router.push(ROUTES.myDonatPools);
  }

  return (
    <Project previousPageTitle="My Donat.Pools" title="New Donat.Pool" onPreviousPageClick={handleClose}>
      {protocol && <CreationForm protocol={protocol} onClose={handleClose} />}
    </Project>
  );
}

export default NewDonatPool;
