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
import { transformProjects } from 'shared/helpers';
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
    const filteredProjects = transformProjects(projects);
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
