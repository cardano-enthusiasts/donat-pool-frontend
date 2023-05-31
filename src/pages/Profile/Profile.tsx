import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Common } from 'layouts';
import { Button, ProjectCard, ProjectCreator } from 'shared/components';
import { useGetUserFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type Fundraising, type AppReduxState } from 'shared/types';

import {
  CardsWrapper,
  FilterButtons,
  PageHeader,
  ProjectWrapper,
  Title,
  TitleAndButtons,
} from './Profile.styled';

const Profile = ({ defaultMode = null }) => {
  const [isCreationMode, setIsCreationMode] = useState(false);
  const offchain = useOffchain();
  const getUserFundraisings = useGetUserFundraisings();
  const {
    data: {
      user: { fundraisings: userFundraisings },
    },
    communication: {
      setWalletStatus: { isRequesting },
    },
  } = useSelector((state: AppReduxState) => state.info);

  const [allProjectsWithStatus, setAllProjectsWithStatus] = useState<
    Fundraising[] | null
  >(null);
  const [filteredProjects, setFilteredProjects] = useState<
    Fundraising[] | null
  >(null);
  const [filter, setFilter] = useState<'active' | 'completed' | null>(null);

  useEffect(() => {
    document.title = 'Profile';
  }, []);

  useEffect(() => {
    if (userFundraisings) {
      const projects = userFundraisings.map((item) => {
        item.status =
          item.deadline - new Date().getTime() > 0 ? 'active' : 'completed';
        return item;
      });
      setAllProjectsWithStatus(projects);
      setFilteredProjects(projects);
    } else {
      setAllProjectsWithStatus(null);
    }
  }, [userFundraisings]);

  useEffect(() => {
    if (offchain) {
      getUserFundraisings();
    }
  }, [offchain]);

  const handleFilterClick = (status: 'active' | 'completed', projects) => {
    if (filter === status) {
      setFilteredProjects(projects);
      setFilter(null);
    } else {
      setFilteredProjects(projects.filter((item) => item.status === 'active'));
      setFilter(status);
    }
  };

  const handleActiveClick = (projects) => {
    handleFilterClick('active', projects);
  };

  const handleCompletedClick = (projects) => {
    handleFilterClick('completed', projects);
  };

  return !isRequesting ? (
    <Common>
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
          onClick={() => {
            setIsCreationMode(true);
          }}
        >
          Create a new project
        </Button>
      </PageHeader>

      <ProjectWrapper>
        {isCreationMode ? (
          <ProjectCreator
            onClose={() => {
              setIsCreationMode(false);
            }}
          />
        ) : (
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
        )}
      </ProjectWrapper>
    </Common>
  ) : (
    <></>
  );
};

export default Profile;
