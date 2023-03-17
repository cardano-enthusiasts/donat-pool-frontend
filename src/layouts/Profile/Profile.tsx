import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Button,
  ProjectCreator,
  ProjectInfo,
  ProjectSidebar,
} from 'shared/components';
import { useGetUserFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type Fundraising, type AppReduxState } from 'shared/types';

import {
  CreateButtonWrapper,
  Main,
  ProjectWrapper,
  SidebarWrapper,
  Starter,
  Wrapper,
} from './Profile.styled';

const Profile = ({ defaultMode = null }) => {
  const [mode, setMode] = useState<Fundraising | 'creation' | null>(
    defaultMode
  );
  const offchain = useOffchain();
  const getUserFundraisings = useGetUserFundraisings();
  const { userFundraisings } = useSelector(
    (state: AppReduxState) => state.info.data
  );

  useEffect(() => {
    if (userFundraisings) {
      if (userFundraisings.length === 0) {
        setMode(null);
      } else {
        setMode(userFundraisings[0]);
      }
    }
  }, [userFundraisings]);

  useEffect(() => {
    if (offchain) {
      getUserFundraisings();
    }
  }, [offchain]);

  const getId = (project: Fundraising) => {
    return project.threadTokenCurrency.toString();
  };

  const handleSidebarClick = (id) => {
    const clickedProject = userFundraisings?.find((item) => getId(item) === id);
    if (clickedProject != null) {
      setMode(clickedProject);
    }
  };

  const getCurrentId = () => {
    if (mode === null || mode === 'creation') {
      return null;
    }
    return getId(mode);
  };

  return (
    <Wrapper>
      <CreateButtonWrapper>
        <Button
          theme="bordered"
          onClick={() => {
            setMode('creation');
          }}
        >
          create project
        </Button>
      </CreateButtonWrapper>
      <Main>
        <SidebarWrapper>
          <ProjectSidebar
            projects={
              userFundraisings
                ? userFundraisings.map((project) => {
                    return {
                      title: project.description,
                      id: getId(project),
                      deadline: project.deadline,
                    };
                  })
                : null
            }
            onClick={handleSidebarClick}
            currentId={getCurrentId()}
          />
        </SidebarWrapper>

        <ProjectWrapper>
          {mode === 'creation' && (
            <ProjectCreator
              onClose={() => {
                setMode(null);
              }}
            />
          )}
          {mode === null && (
            <Starter>Create a new project or choose one</Starter>
          )}
          {mode !== null && mode !== 'creation' && (
            <ProjectInfo
              data={{
                deadline: mode.deadline,
                description: mode.description,
                goal: mode.goal,
                raisedAmount: mode.raisedAmount,
                threadTokenCurrency: mode.threadTokenCurrency,
                threadTokenName: mode.threadTokenName,
              }}
            />
          )}
        </ProjectWrapper>
      </Main>
    </Wrapper>
  );
};

export default Profile;
