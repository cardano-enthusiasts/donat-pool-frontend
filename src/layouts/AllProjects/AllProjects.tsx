import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  setAllProjects,
  setAllProjectsFail,
  setAllProjectsSuccess,
} from 'features/info/redux/actionCreators';
import { ProjectCard } from 'shared/components';
import { protocol } from 'shared/constants';
import { useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import { CardsWrapper, Title, Wrapper } from './AllProjects.styled';

const AllProjects = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const allProjects = useSelector(
    (state: AppReduxState) => state.info.data.allProjects
  );

  const handleGetAllFundraisingsSuccess = (projects) => {
    console.log('projects', projects);

    const filteredProjects = projects.map(
      ({
        creator,
        deadline,
        description,
        goal,
        raisedAmt,
        threadTokenCurrency,
        threadTokenName,
      }) => {
        return {
          creator,
          deadline: Number(deadline.value),
          description,
          goal: Number(goal.value),
          raisedAmount: Number(raisedAmt.value),
          threadTokenCurrency,
          threadTokenName,
        };
      }
    );
    dispatch(setAllProjectsSuccess(filteredProjects));
  };

  const handleGetFundraisingError = (error) => {
    toast.error(error);
    dispatch(setAllProjectsFail(error));
  };

  useEffect(() => {
    if (offchain) {
      offchain.getAllFundraisings(handleGetAllFundraisingsSuccess)(
        handleGetFundraisingError
      )(protocol)();
      dispatch(setAllProjects());
    }
  }, [offchain]);

  return (
    <Wrapper>
      <Title>Active projects</Title>
      <CardsWrapper>
        {allProjects ? (
          allProjects.map(
            ({
              description,
              deadline,
              goal,
              raisedAmount,
              threadTokenCurrency,
              threadTokenName,
            }) => {
              return (
                <ProjectCard
                  data={{
                    deadline,
                    description,
                    goal,
                    raisedAmount,
                    threadTokenCurrency,
                    threadTokenName,
                  }}
                  key={threadTokenCurrency.toString()}
                />
              );
            }
          )
        ) : (
          <></>
        )}
      </CardsWrapper>
    </Wrapper>
  );
};

export default AllProjects;
