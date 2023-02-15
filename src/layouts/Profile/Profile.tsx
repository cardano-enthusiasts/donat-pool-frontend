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

const Profile = () => {
  const projects = [
    { title: 'Cats', id: 0 },
    { title: 'Help somebody', id: 1 },
    { title: 'Donation for out little community', id: 2 },
  ];

  const handleSidebarClick = (id) => {
    console.log(id);
  };
  return (
    <Wrapper>
      <CreateButtonWrapper>
        <Button theme="bordered">create project</Button>
      </CreateButtonWrapper>
      <Main>
        <ProjectSidebar projects={projects} onClick={handleSidebarClick} />
        <ProjectWrapper>
          <ProjectCreator />
          {/* <ProjectInfo /> */}
        </ProjectWrapper>
      </Main>
    </Wrapper>
  );
};

export default Profile;
