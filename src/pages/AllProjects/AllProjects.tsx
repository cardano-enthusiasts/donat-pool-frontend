import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Common } from 'layouts';
import { Button, ProjectCard } from 'shared/components';
import { useGetAllFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type Fundraisings, type AppReduxState } from 'shared/types';

import {
  CardsWrapper,
  Title,
  TitleAndButton,
  Wrapper,
} from './AllProjects.styled';

const AllProjects = () => {
  const offchain = useOffchain();
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
    document.title = 'Projects';
  }, []);

  const sortFundraising = (fundraisings: Fundraisings) => {
    return fundraisings.sort(
      (fundraising1, fundraising2) =>
        fundraising1.deadline - fundraising2.deadline
    );
  };

  return !isRequesting ? (
    <Common>
      <Wrapper>
        <TitleAndButton>
          <Title>All Donation pools</Title>
          <Button primaryColor="red" secondaryColor="blue" fontColor="black">
            Create a new project
          </Button>
        </TitleAndButton>

        <CardsWrapper>
          {allFundraisings ? (
            sortFundraising(allFundraisings).map((project) => (
              <ProjectCard
                data={project}
                key={project.threadTokenCurrency.toString()}
                linkSection="all-projects"
              />
            ))
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
