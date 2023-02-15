import Button from 'shared/components/Button/Button';
import ProjectCreator from 'shared/components/ProjectCreator/ProjectCreator';
import ProjectSidebar from 'shared/components/ProjectSidebar/ProjectSidebar';

import {
  CreateButtonWrapper,
  Main,
  ProjectCreatorWrapper,
  Wrapper,
} from './Profile.styled';

const Profile = () => {
  const projects = [
    { title: 'Cats', id: 0 },
    { title: 'Help somebody', id: 1 },
    { title: 'Donation for out little community', id: 2 },
  ];
  return (
    <Wrapper>
      <CreateButtonWrapper>
        <Button theme="bordered">create project</Button>
      </CreateButtonWrapper>
      <Main>
        <ProjectSidebar projects={projects} />
        <ProjectCreatorWrapper>
          <ProjectCreator />
        </ProjectCreatorWrapper>
      </Main>
    </Wrapper>
  );
};

export default Profile;
