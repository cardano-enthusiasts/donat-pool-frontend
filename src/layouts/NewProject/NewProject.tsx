'use client';

import { useRouter } from 'next/navigation';

import { Project } from '@/layouts';
import { CreationForm } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useAppSelector } from '@/shared/hooks';

const NewProject = () => {
  const router = useRouter();
  const protocol = useAppSelector((state) => state.appInfo.protocol);

  const handleClose = () => {
    router.push(ROUTES.userFundraisings);
  };

  return (
    <Project previousPageTitle="My Donat.Pools" title="New Donat.Pool" onPreviousPageClick={handleClose}>
      {protocol && <CreationForm protocol={protocol} onClose={handleClose} />}
    </Project>
  );
};

export default NewProject;
