import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Common } from 'layouts';
import { ProjectCreation } from 'shared/components';
import { type AppReduxState } from 'shared/types';

const NewProject = () => {
  const navigate = useNavigate();
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.info.communication.setWalletStatus,
  );

  useEffect(() => {
    document.title = 'New project';
  }, []);

  return !isRequesting ? (
    <Common>
      <ProjectCreation
        onClose={() => {
          navigate('/my-projects');
        }}
      />
    </Common>
  ) : (
    <></>
  );
};

export default NewProject;
