import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  setAllProjects,
  setAllProjectsSuccess,
} from 'features/info/redux/actionCreators';
import ProjectCard from 'shared/components/ProjectCard/ProjectCard';
import { useOffchain } from 'shared/hooks/useOffchain';
import { type AppReduxState } from 'shared/types';

import { CardsWrapper, Title, Wrapper } from './AllProjects.styled';
import fixedProtocol from '../../../startProtocolParams';

const AllProjects = () => {
  const offchain = useOffchain();
  const dispatch = useDispatch();
  const allProjects = useSelector(
    (state: AppReduxState) => state.info.data.allProjects
  );

  const handleGetAllFundraisingsSuccess = (projects) => {
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
  };

  useEffect(() => {
    if (offchain) {
      offchain.getAllFundraisings(handleGetAllFundraisingsSuccess)(
        handleGetFundraisingError
      )(fixedProtocol)();
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
            }) => {
              return (
                <ProjectCard
                  deadline={deadline}
                  title={description}
                  goal={goal}
                  raisedAmount={raisedAmount}
                  id={threadTokenCurrency.toString()}
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
