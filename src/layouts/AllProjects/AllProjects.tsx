import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAllProjects } from 'features/info/redux/actionCreators';
import { ProjectCard } from 'shared/components';
import { useGetAllFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { CardsWrapper, Title, Wrapper } from './AllProjects.styled';

const AllProjects = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const getFundraising = useGetAllFundraisings();
  const allProjects = useSelector(
    (state: AppReduxState) => state.info.data.allProjects
  );

  useEffect(() => {
    if (offchain) {
      getFundraising();
      dispatch(setAllProjects());
    }
  }, [offchain]);

  return (
    <Wrapper>
      <Title>Active projects</Title>
      <CardsWrapper>
        {allProjects ? (
          allProjects.map((project) => {
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
