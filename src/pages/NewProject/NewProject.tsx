import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'core/hooks';
import { Common } from 'layouts';
import { ProjectCreation } from 'shared/components';

const NewProject = () => {
  const navigate = useNavigate();

  const isRequesting =
    useAppSelector((state) => state.wallet.status) === 'requesting';

  useEffect(() => {
    document.title = 'New project';
  }, []);

  return isRequesting ? (
    <></>
  ) : (
    <Common>
      <ProjectCreation
        onClose={() => {
          navigate('/my-projects');
        }}
      />
    </Common>
  );
};

export default NewProject;
