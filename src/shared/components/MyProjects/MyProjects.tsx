import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  type ProjectStatus,
  type AppReduxState,
  type Fundraising,
} from 'shared/types';

import {
  CardsWrapper,
  CreateButton,
  FilterButtons,
  NoProject,
  PageHeader,
  ProjectWrapper,
  SadCat,
  Title,
  TitleAndButtons,
} from './MyProjects.styled';
import { type Props } from './types';
import { Button, ProjectCard } from '../.';

const MyProjects = ({ onCreateAProjectClick }: Props) => {
  const [allProjectsWithStatus, setAllProjectsWithStatus] = useState<
    Fundraising[] | null
  >(null);
  const [filteredProjects, setFilteredProjects] = useState<
    Fundraising[] | null
  >(null);
  const [filter, setFilter] = useState<ProjectStatus | null>(null);
  const { fundraisings } = useSelector(
    (state: AppReduxState) => state.info.data.user
  );

  useEffect(() => {
    if (fundraisings) {
      setAllProjectsWithStatus(fundraisings);
      setFilteredProjects(fundraisings);
    } else {
      setAllProjectsWithStatus(null);
    }
  }, [fundraisings]);

  const handleFilterClick = (status: ProjectStatus, projects) => {
    if (filter === status) {
      setFilteredProjects(projects);
      setFilter(null);
    } else {
      setFilteredProjects(projects.filter((item) => item.status === status));
      setFilter(status);
    }
  };

  return (
    <>
      <PageHeader>
        <TitleAndButtons>
          <Title>My projects</Title>
          {allProjectsWithStatus !== null && (
            <FilterButtons>
              <Button
                themeType="quaternary"
                primaryColor="red"
                onClick={() => {
                  handleFilterClick('active', allProjectsWithStatus);
                }}
                isClickedTheme={filter === 'active'}
                size="s"
              >
                Active
              </Button>
              <Button
                themeType="quaternary"
                primaryColor="green"
                onClick={() => {
                  handleFilterClick('completed', allProjectsWithStatus);
                }}
                isClickedTheme={filter === 'completed'}
                size="s"
              >
                Completed
              </Button>
            </FilterButtons>
          )}
        </TitleAndButtons>

        <CreateButton>
          <Button
            primaryColor="red"
            secondaryColor="blue"
            onClick={onCreateAProjectClick}
          >
            Create a new project
          </Button>
        </CreateButton>
      </PageHeader>

      <ProjectWrapper>
        {filteredProjects ? (
          <CardsWrapper>
            {filteredProjects.map((item) => (
              <ProjectCard
                data={item}
                linkSection="my-projects"
                key={item.path}
                status={item.status}
                paddingSize="s"
              />
            ))}
          </CardsWrapper>
        ) : (
          <NoProject>
            You don&apos;t have any projects yet. Create a project to start
            receiving donations.
            <SadCat src="/img/sad-cat.svg" alt="sad cat image" />
          </NoProject>
        )}
      </ProjectWrapper>
    </>
  );
};

export { MyProjects };
