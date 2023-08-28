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
    <Project onPreviousPageClick={handleClose} previousPageTitle="My projects" title="New project">
      {protocol && <CreationForm protocol={protocol} onClose={handleClose} />}
    </Project>
  );
};

export default NewProject;
