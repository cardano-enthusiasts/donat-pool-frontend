import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUserProjects } from 'features/info/redux/actionCreators';
import {
  Button,
  ProjectCreator,
  ProjectInfo,
  ProjectSidebar,
} from 'shared/components';
import { useGetUserFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type Project, type AppReduxState } from 'shared/types';

import {
  CreateButtonWrapper,
  Main,
  ProjectWrapper,
  SidebarWrapper,
  Starter,
  Wrapper,
} from './Profile.styled';

const Profile = ({ defaultMode = null }) => {
  const [mode, setMode] = useState<Project | 'creation' | null>(defaultMode);
  const offchain = useOffchain();
  const getUserFundraisings = useGetUserFundraisings();
  const dispatch = useDispatch();
  const userProjects = useSelector(
    (state: AppReduxState) => state.info.data.userProjects
  );

  useEffect(() => {
    if (userProjects) {
      setMode(userProjects[0]);
    }
  }, [userProjects]);

  useEffect(() => {
    if (offchain) {
      getUserFundraisings();
      dispatch(setUserProjects());
    }
  }, [offchain]);

  const getId = (project: Project) => {
    return project.threadTokenCurrency.toString();
  };

  const handleSidebarClick = (id) => {
    const clickedProject = userProjects?.find((item) => getId(item) === id);
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
              userProjects
                ? userProjects.map((project) => {
                    return {
                      title: project.description,
                      id: getId(project),
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
