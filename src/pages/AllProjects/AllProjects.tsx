import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Common } from 'layouts';
import { Button, ProjectCard } from 'shared/components';
import { useGetAllFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type Fundraisings, type AppReduxState } from 'shared/types';

import {
  CardsWrapper,
  CreateButton,
  Title,
  TitleAndButton,
  Wrapper,
} from './AllProjects.styled';

const AllProjects = () => {
  const offchain = useOffchain();
  const navigate = useNavigate();
  const getAllFundraisings = useGetAllFundraisings();
  const {
    data: { allFundraisings },
    communication: {
      setWalletStatus: { isRequesting },
    },
  } = useSelector((state: AppReduxState) => state.info);

  useEffect(() => {
    if (offchain) {
      getAllFundraisings();
    }
  }, [offchain]);

  useEffect(() => {
    document.title = 'All projects';
  }, []);

  const sortAndFilterFundraising = (fundraisings: Fundraisings) => {
    return fundraisings
      .sort(
        (fundraising1, fundraising2) =>
          fundraising1.deadline - fundraising2.deadline
      )
      .filter(({ isCompleted }) => !isCompleted);
  };

  return !isRequesting ? (
    <Common>
      <Wrapper>
        <TitleAndButton>
          <Title>All Donation pools</Title>
          <CreateButton>
            <Button
              primaryColor="red"
              secondaryColor="blue"
              fontColor="white"
              onClick={() => {
                navigate('/new-project');
              }}
            >
              Create a new project
            </Button>
          </CreateButton>
        </TitleAndButton>

        <CardsWrapper>
          {allFundraisings ? (
            sortAndFilterFundraising(allFundraisings).map((project) => {
              return (
                <ProjectCard
                  data={project}
                  key={project.threadTokenCurrency.toString()}
                  linkSection="all-projects"
                />
              );
            })
          ) : (
            <></>
          )}
        </CardsWrapper>
      </Wrapper>
    </Common>
  ) : (
    <></>
  );
};

export default AllProjects;
