import {
  Item,
  ProjectList,
  StyledSidebar,
  Title,
} from './ProjectSidebar.styled';
import { type Props } from './types';

const ProjectSidebar = ({ projects, onClick, currentId }: Props) => {
  const sortFundraising = (fundraisings: NonNullable<Props['projects']>) => {
    const sorted = fundraisings.sort(function (fundraising1, fundraising2) {
      return fundraising1.deadline - fundraising2.deadline;
    });
    return sorted;
  };

  return (
    <StyledSidebar>
      <Title>My projects</Title>
      <ProjectList>
        {projects !== null ? (
          sortFundraising(projects).map(({ title, id }) => (
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
