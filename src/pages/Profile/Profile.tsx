import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Common } from 'layouts';
import { MyProjects, ProjectCreation } from 'shared/components';
import { useGetUserFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { type Props } from './types';

const Profile = ({ isCreationModeInitial = false }: Props) => {
  const [isCreationMode, setIsCreationMode] = useState(true);
  const offchain = useOffchain();
  const getUserFundraisings = useGetUserFundraisings();
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.info.communication.setWalletStatus
  );

  useEffect(() => {
    document.title = 'Profile';
  }, []);

  useEffect(() => {
    if (offchain) {
      getUserFundraisings();
    }
  }, [offchain]);

  return !isRequesting ? (
    <Common>
      {isCreationMode ? (
        <ProjectCreation
          onClose={() => {
            setIsCreationMode(false);
          }}
        />
      ) : (
        <MyProjects
          onCreateAProjectClick={() => {
            setIsCreationMode(true);
          }}
        />
      )}
    </Common>
  ) : (
    <></>
  );
};

export default Profile;
