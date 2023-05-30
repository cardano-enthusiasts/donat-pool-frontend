import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Common } from 'layouts';
import { Button, ModalDonate } from 'shared/components';
import getDate from 'shared/helpers/getDate';
import { useGetAllFundraisings, useOffchain } from 'shared/helpers/hooks';
import { type AppReduxState, type Fundraising } from 'shared/types';

import {
  ButtonWrapper,
  Duration,
  Goal,
  Img,
  Line,
  Raised,
  Sum,
  Title,
  Wrapper,
} from './ProjectForAll.styled';

const ProjectForAll = () => {
  const params = useParams();
  const offchain = useOffchain();
  const getAllFundraisings = useGetAllFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { allFundraisings } = useSelector(
    (state: AppReduxState) => state.info.data
  );

  useEffect(() => {
    if (offchain) {
      getAllFundraisings();
    }
  }, [offchain]);

  useEffect(() => {
    if (allFundraisings) {
      const project = allFundraisings.find(({ path }) => path === params.id);
      if (project) {
        setCurrentProject(project);
      } else {
        setCurrentProject(null);
      }
    }
  }, [allFundraisings, params.id]);

  return currentProject ? (
    <>
      <Common>
        <Wrapper>
          <Title>{currentProject.description}</Title>
          <Duration>{getDate(currentProject.deadline)} </Duration>
          <Sum>
            <Img src="/img/progress-bar.svg" alt="progress bar" />
            <Raised>{currentProject.raisedAmount / 1000000}</Raised>
            <Line />
            <Goal>{currentProject.goal / 1000000}</Goal>
          </Sum>
          <ButtonWrapper>
            <Button
              themeType="secondary"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Donate
            </Button>
          </ButtonWrapper>
        </Wrapper>
      </Common>
      <ModalDonate
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        data={{
          threadTokenCurrency: currentProject.threadTokenCurrency,
          threadTokenName: currentProject.threadTokenName,
        }}
      />
    </>
  ) : (
    <></>
  );
};

export default ProjectForAll;
