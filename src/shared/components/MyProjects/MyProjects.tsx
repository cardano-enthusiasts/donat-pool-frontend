import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { type AppReduxState, type Fundraising } from 'shared/types';

import {
  CardsWrapper,
  FilterButtons,
  PageHeader,
  ProjectWrapper,
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
  const [filter, setFilter] = useState<'active' | 'completed' | null>(null);
  const { fundraisings } = useSelector(
    (state: AppReduxState) => state.info.data.user
  );

  useEffect(() => {
    if (fundraisings) {
      const projects = fundraisings.map((item) => {
        item.status =
          item.deadline - new Date().getTime() > 0 ? 'active' : 'completed';
        return item;
      });
      setAllProjectsWithStatus(projects);
      setFilteredProjects(projects);
    } else {
      setAllProjectsWithStatus(null);
    }
  }, [fundraisings]);

  const handleFilterClick = (status: 'active' | 'completed', projects) => {
    if (filter === status) {
      setFilteredProjects(projects);
      setFilter(null);
    } else {
      setFilteredProjects(projects.filter((item) => item.status === status));
      setFilter(status);
    }
  };

  const handleActiveClick = (projects) => {
    handleFilterClick('active', projects);
  };

  const handleCompletedClick = (projects) => {
    handleFilterClick('completed', projects);
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
                  handleActiveClick(allProjectsWithStatus);
                }}
                isClickedTheme={filter === 'active'}
              >
                Active
              </Button>
              <Button
                themeType="quaternary"
                primaryColor="green"
                onClick={() => {
                  handleCompletedClick(allProjectsWithStatus);
                }}
                isClickedTheme={filter === 'completed'}
              >
                Completed
              </Button>
            </FilterButtons>
          )}
        </TitleAndButtons>

        <Button
          primaryColor="red"
          secondaryColor="blue"
          onClick={onCreateAProjectClick}
        >
          Create a new project
        </Button>
      </PageHeader>

      <ProjectWrapper>
        <CardsWrapper>
          {filteredProjects?.map((item) => {
            return (
              <ProjectCard
                data={item}
                status={
                  item.deadline - new Date().getTime() > 0
                    ? 'active'
                    : 'completed'
                }
                key={item.path}
              />
            );
          })}
        </CardsWrapper>
      </ProjectWrapper>
    </>
  );
};

export { MyProjects };
