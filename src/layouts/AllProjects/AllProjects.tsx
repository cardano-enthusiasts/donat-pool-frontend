import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ProjectCard } from 'shared/components';
import { useGetAllFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type Fundraisings, type AppReduxState } from 'shared/types';

import { CardsWrapper, Title, Wrapper } from './AllProjects.styled';

const AllProjects = () => {
  const offchain = useOffchain();
  const getAllFundraisings = useGetAllFundraisings();
  const { allFundraisings } = useSelector(
    (state: AppReduxState) => state.info.data
  );

  useEffect(() => {
    if (offchain) {
      getAllFundraisings();
    }
  }, [offchain]);

  const sortFundraising = (fundraisings: Fundraisings) => {
    const sorted = fundraisings.sort(function (fundraising1, fundraising2) {
      return fundraising1.deadline - fundraising2.deadline;
    });
    return sorted;
  };

  return (
    <Wrapper>
      <Title>Active projects</Title>
      <CardsWrapper>
        {allFundraisings ? (
          sortFundraising(allFundraisings).map((project) => (
            <ProjectCard
              data={project}
              key={project.threadTokenCurrency.toString()}
            />
          ))
        ) : (
          <></>
        )}
      </CardsWrapper>
    </Wrapper>
  );
};

export default AllProjects;
