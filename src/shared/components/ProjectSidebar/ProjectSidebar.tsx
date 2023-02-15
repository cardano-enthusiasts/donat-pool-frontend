import {
  Item,
  ProjectList,
  StyledSidebar,
  Title,
} from './ProjectSidebar.styled';
import { type Props } from './types';

const ProjectSidebar = ({ projects }: Props) => {
  return (
    <StyledSidebar>
      <Title>My projects</Title>
      <ProjectList>
        {projects.map(({ title, id }) => (
          <Item key={id}>{title}</Item>
        ))}
      </ProjectList>
    </StyledSidebar>
  );
};

export default ProjectSidebar;
