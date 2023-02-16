import { useState } from 'react';

import Button from 'shared/components/Button/Button';
import ProjectCreator from 'shared/components/ProjectCreator/ProjectCreator';
import ProjectInfo from 'shared/components/ProjectInfo/ProjectInfo';
import ProjectSidebar from 'shared/components/ProjectSidebar/ProjectSidebar';

import {
  CreateButtonWrapper,
  Main,
  ProjectWrapper,
  Wrapper,
} from './Profile.styled';
import { type Project } from './types';

const Profile = ({ defaultMode = null }) => {
  const [mode, setMode] = useState<Project | 'creation' | null>(defaultMode);

  const projectInfo = [
    {
      title: 'Cats',
      startDate: '12.02.2001',
      endDate: '12.02.2001',
      goal: '900 ADA',
      raised: '90 ADA',
      id: 0,
    },
    {
      title: 'Help somebody',
      startDate: '12.02.2021',
      endDate: '12.02.2091',
      goal: '100 ADA',
      raised: '80 ADA',
      id: 1,
    },
    {
      title: 'donation for our little community',
      startDate: '12.02.2101',
      endDate: '12.06.2091',
      goal: '100000 ADA',
      raised: '0 ADA',
      id: 2,
    },
  ];

  const handleSidebarClick = (id) => {
    const clickedProject = projectInfo.find((item) => item.id === id);
    if (clickedProject != null) {
      setMode(clickedProject);
    }
  };

  const getCurrentId = () => {
    if (mode === null || mode === 'creation') {
      return null;
    }
    return mode.id;
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
        <ProjectSidebar
          projects={projectInfo.map(({ title, id }) => {
            return {
              title,
              id,
            };
          })}
          onClick={handleSidebarClick}
          currentId={getCurrentId()}
        />
        <ProjectWrapper>
          {mode === 'creation' && (
            <ProjectCreator
              onClose={() => {
                setMode(null);
              }}
            />
          )}
          {mode !== null && mode !== 'creation' && (
            <ProjectInfo
              title={mode.title}
              startDate={mode.startDate}
              endDate={mode.endDate}
              goal={mode.goal}
              raised={mode.raised}
            />
          )}
        </ProjectWrapper>
      </Main>
    </Wrapper>
  );
};

export default Profile;
