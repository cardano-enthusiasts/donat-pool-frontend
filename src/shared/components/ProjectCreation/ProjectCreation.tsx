import { useAppSelector } from 'core/hooks';
import { Project } from 'layouts';
import { CreationForm } from 'shared/components';

import { type Props } from './types';

const ProjectCreation = ({ onClose }: Props) => {
  const protocol = useAppSelector((state) => state.appInfo.protocol);
  return (
    <Project
      onPreviousPageClick={onClose}
      previousPageTitle="My projects"
      title="New project"
    >
      {protocol && <CreationForm onClose={onClose} protocol={protocol} />}
    </Project>
  );
};

export { ProjectCreation };
