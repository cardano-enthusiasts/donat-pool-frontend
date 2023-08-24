import { Project } from '@/layouts';
import { useAppSelector } from '@/redux/hooks';
import { CreationForm } from '@/shared/components';

import type { Props } from './types';

const ProjectCreation = ({ onClose }: Props) => {
  const protocol = useAppSelector((state) => state.appInfo.protocol);

  return (
    <Project onPreviousPageClick={onClose} previousPageTitle="My Donat.Pool" title="New Donat.Pool">
      {protocol && <CreationForm onClose={onClose} protocol={protocol} />}
    </Project>
  );
};

export { ProjectCreation };
