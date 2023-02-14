import { Item, ProjectList, StyledSidebar } from './ProjectSidebar.styled';
import { type Props } from './types';

const ProjectSidebar = ({ projects }: Props) => {
  return (
    <StyledSidebar>
      <ProjectList>
        {projects.map(({ title, id }) => (
          <Item key={id}>{title}</Item>
        ))}
      </ProjectList>
    </StyledSidebar>
  );
};

export default ProjectSidebar;
