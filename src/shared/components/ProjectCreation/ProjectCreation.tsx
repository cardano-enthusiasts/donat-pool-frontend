import { Project } from 'layouts';
import { CreationForm } from 'shared/components';

import { Title } from './ProjectCreation.styled';
import { type Props } from './types';

const ProjectCreation = ({ onClose }: Props) => {
  return (
    <Project
      onPreviousPageClick={onClose}
      previousPageTitle="My projects"
      pageHeader={<Title>New project</Title>}
    >
      <CreationForm onClose={onClose} />
    </Project>
  );
};

export { ProjectCreation };
