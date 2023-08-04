import { useEffect, useState } from 'react';

import { type Fundraisings, type Fundraising } from 'shared/types';
import { useAppSelector } from 'store/hooks';

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
import { type ProjectStatus, type Props } from './types';
import { Button, ProjectCard } from '../.';

const MyProjects = ({ onCreateAProjectClick }: Props) => {
  const [allProjectsWithStatus, setAllProjectsWithStatus] = useState<
    Fundraising[] | null
  >(null);
  const [filteredProjects, setFilteredProjects] = useState<
    Fundraising[] | null
  >(null);
  const [filter, setFilter] = useState<ProjectStatus | null>(null);
  const { fundraisings } = useAppSelector((state) => state.userFundraisings);

  useEffect(() => {
    if (fundraisings) {
      setAllProjectsWithStatus(fundraisings);
      setFilteredProjects(fundraisings);
    } else {
      setAllProjectsWithStatus(null);
    }
  }, [fundraisings]);

  const handleFilterClick = (status: ProjectStatus, projects: Fundraisings) => {
    if (filter === status) {
      setFilteredProjects(projects);
      setFilter(null);
    } else {
      const isCompleted = status === 'completed';
      setFilteredProjects(
        projects.filter((item) => item.isCompleted === isCompleted),
      );
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
                themeType="bordered"
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
                themeType="bordered"
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
            fontColor="white"
          >
            Create a new project
          </Button>
        </CreateButton>
      </PageHeader>

      <ProjectWrapper>
        {filteredProjects && filteredProjects.length !== 0 ? (
          <CardsWrapper>
            {filteredProjects.map((item) => (
              <ProjectCard
                data={item}
                linkSection="my-projects"
                key={item.threadTokenCurrency}
                status={item.isCompleted ? 'completed' : 'active'}
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
