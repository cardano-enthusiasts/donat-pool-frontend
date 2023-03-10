import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllFundraisings } from 'features/info/redux/actionCreators';
import { ProjectCard } from 'shared/components';
import { useGetAllFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { CardsWrapper, Title, Wrapper } from './AllProjects.styled';

const AllProjects = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getFundraising = useGetAllFundraisings();
  const allFundraisings = useSelector(
    (state: AppReduxState) => state.info.data.allFundraisings
  );

  useEffect(() => {
    if (offchain) {
      getFundraising();
      dispatch(getAllFundraisings());
    }
  }, [offchain]);

  return (
    <Wrapper>
      <Title>Active projects</Title>
      <CardsWrapper>
        {allFundraisings ? (
          allFundraisings.map((project) => {
            return (
              <ProjectCard
                data={project}
                key={project.threadTokenCurrency.toString()}
              />
            );
          })
        ) : (
          <></>
        )}
      </CardsWrapper>
    </Wrapper>
  );
};

export default AllProjects;
