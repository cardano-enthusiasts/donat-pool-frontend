import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Common } from 'layouts';
import {
  Button,
  ModalDonate,
  ModalError,
  ModalLoading,
  ModalSuccess,
} from 'shared/components';
import getDate from 'shared/helpers/getDate';
import {
  useDonate,
  useGetAllFundraisings,
  useOffchain,
} from 'shared/helpers/hooks';
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
} from './PublicProject.styled';

const PublicProject = () => {
  const params = useParams();
  const offchain = useOffchain();
  const getAllFundraisings = useGetAllFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalLoadingOpen, setIsModalLoadingOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const handleDonateSuccess = () => {
    setIsModalSuccessOpen(true);
    setIsModalOpen(false);
  };
  const handleDonateError = () => {
    setIsModalOpen(false);
    setIsModalErrorOpen(true);
  };
  const donate = useDonate({
    onSuccess: handleDonateSuccess,
    onError: handleDonateError,
  });
  const { allFundraisings } = useSelector(
    (state: AppReduxState) => state.info.data
  );
  const { isRequesting, error } = useSelector(
    (state: AppReduxState) => state.fundraising.communication.donate
  );

  useEffect(() => {
    if (isRequesting) {
      setIsModalLoadingOpen(true);
      setIsModalOpen(false);
    } else {
      setIsModalLoadingOpen(false);
    }
  }, [isRequesting]);

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
        donate={donate}
      />
      <ModalError
        isOpen={isModalErrorOpen}
        title="How many ADA would you like to donate?"
        errorText={error}
        onClose={() => {
          setIsModalErrorOpen(false);
        }}
      />
      <ModalLoading
        isOpen={isModalLoadingOpen}
        title="How many ADA would you like to donate?"
      />
      <ModalSuccess
        isOpen={isModalSuccessOpen}
        description="Congratulations! Your donut is ready!"
        onClose={() => {
          setIsModalSuccessOpen(false);
        }}
      />
    </>
  ) : (
    <></>
  );
};

export default PublicProject;
