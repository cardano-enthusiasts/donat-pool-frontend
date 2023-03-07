import {
  Item,
  ProjectList,
  StyledSidebar,
  Title,
} from './ProjectSidebar.styled';
import { type Props } from './types';

const ProjectSidebar = ({ projects, onClick, currentId }: Props) => {
  return (
    <StyledSidebar>
      <Title>My projects</Title>
      <ProjectList>
        {projects !== null ? (
          projects.map(({ title, id }) => (
            <Item
              key={id}
              onClick={() => {
                onClick(id);
              }}
              isClicked={id === currentId}
            >
              {title}
            </Item>
          ))
        ) : (
          <></>
        )}
      </ProjectList>
    </StyledSidebar>
  );
};

export { ProjectSidebar };
