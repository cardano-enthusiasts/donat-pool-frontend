import { Project } from '@/layouts';
import { CreationForm } from '@/shared/components';

import { type Props } from './types';

const ProjectCreation = ({ onClose }: Props) => {
  return (
    <Project
      onPreviousPageClick={onClose}
      previousPageTitle="My projects"
      title="New project"
    >
      <CreationForm onClose={onClose} />
    </Project>
  );
};

export { ProjectCreation };
