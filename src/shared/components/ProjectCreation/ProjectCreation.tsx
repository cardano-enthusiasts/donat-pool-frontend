import { Project } from '@/layouts';
import { CreationForm } from '@/shared/components';
import { useAppSelector } from '@/shared/hooks';

import type { Props } from './types';

function ProjectCreation({ onClose }: Props) {
  const protocol = useAppSelector((state) => state.appInfo.protocol);

  return (
    <Project onPreviousPageClick={onClose} previousPageTitle="My projects" title="New project">
      {protocol && <CreationForm onClose={onClose} protocol={protocol} />}
    </Project>
  );
}

export default ProjectCreation;
