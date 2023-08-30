'use client';

import { useRouter } from 'next/navigation';

import { useAppSelector } from '@/redux/hooks';
import { CreationForm, Project } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

function NewDonatPool() {
  const router = useRouter();
  const protocol = useAppSelector((state) => state.appInfo.protocol);

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
