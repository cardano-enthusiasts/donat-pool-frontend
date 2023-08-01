import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'core/hooks';
import { Common } from 'layouts';
import { MyProjects } from 'shared/components';
import { useGetUserFundraisings, useOffchain } from 'shared/helpers/hooks';

const PrivateProjects = () => {
  const navigate = useNavigate();
  const offchain = useOffchain();
  const getUserFundraisings = useGetUserFundraisings();
  const { mode, status } = useAppSelector((state) => state.wallet);

  useEffect(() => {
    document.title = 'My projects';
  }, []);

  useEffect(() => {
    if (offchain && mode === 'connected') {
      getUserFundraisings();
    }
  }, [offchain, mode]);

  return status === 'requesting' ? (
    <></>
  ) : (
    <Common>
      <MyProjects
        onCreateAProjectClick={() => {
          navigate('/new-project');
        }}
      />
    </Common>
  );
};

export default PrivateProjects;
