import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';

import { Common } from '@/layouts';
import {
  Button,
  ModalDonate,
  ModalError,
  ModalLoading,
  ModalSuccess,
  RaisedCounter,
} from '@/shared/components';
import { getDate } from '@/shared/helpers';
import {
  useDonate,
  useGetAllFundraisings,
  useOffchain,
} from '@/shared/helpers/hooks';
import { type AppReduxState, type Fundraising } from '@/shared/types';

import {
  ButtonWrapper,
  CounterWrapper,
  Duration,
  Title,
  Wrapper,
} from './PublicProject.styled';

const PublicProject = () => {
  const params = useParams();
  const offchain = useOffchain();
  const getAllFundraisings = useGetAllFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(
    null,
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
    (state: AppReduxState) => state.info.data,
  );
  const { isRequesting, error } = useSelector(
    (state: AppReduxState) => state.fundraising.communication.donate,
  );

  useEffect(() => {
    setIsModalLoadingOpen(isRequesting);
    if (isRequesting) {
      setIsModalOpen(false);
    }
  }, [isRequesting]);

  useEffect(() => {
    if (offchain) {
      getAllFundraisings();
    }
  }, [offchain]);

  useEffect(() => {
    if (allFundraisings) {
      const project = allFundraisings.find(({ path }) => path === params?.id);
      if (project) {
        setCurrentProject(project);
      } else {
        setCurrentProject(null);
      }
    }
  }, [allFundraisings, params?.id]);

  return currentProject ? (
    <>
      <Common>
        <Wrapper>
          <Title>{currentProject.description}</Title>
          <Duration>Until {getDate(currentProject.deadline)} </Duration>
          <CounterWrapper>
            <RaisedCounter
              raised={currentProject.raisedAmount / 1000000}
              goal={currentProject.goal / 1000000}
            />
          </CounterWrapper>

          <ButtonWrapper>
            <Button
              themeType="accent"
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
