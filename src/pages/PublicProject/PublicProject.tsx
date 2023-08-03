import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'core/hooks';
import { setStatus } from 'core/slices/donating';
import { Common } from 'layouts';
import {
  Button,
  ModalDonate,
  ModalError,
  ModalLoading,
  ModalSuccess,
  RaisedCounter,
} from 'shared/components';
import { getDate } from 'shared/helpers';
import {
  useDonate,
  useGetAllFundraisings,
  useOffchain,
} from 'shared/helpers/hooks';
import { type Fundraising } from 'shared/types';

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
  const dispatch = useAppDispatch();
  const getAllFundraisings = useGetAllFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalLoadingOpen, setIsModalLoadingOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const donate = useDonate();

  const {
    donating: { error, status },
    allFundraisings: { value: allFundraisings },
  } = useAppSelector((state) => state);

  useEffect(() => {
    const isRequesting = status === 'requesting';
    setIsModalLoadingOpen(isRequesting);

    const isSuccessfully = status === 'success';
    const isError = status === 'error';
    if (isRequesting || isSuccessfully || isError) {
      setIsModalOpen(false);
    }
    if (isSuccessfully) {
      setIsModalSuccessOpen(true);
    }
    if (isError) {
      setIsModalErrorOpen(true);
    }
  }, [status]);

  useEffect(() => {
    if (offchain) {
      getAllFundraisings();
    }
  }, [offchain]);

  useEffect(() => {
    if (allFundraisings) {
      const project = allFundraisings.find(
        ({ threadTokenCurrency }) => threadTokenCurrency === params.id,
      );
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
          <Title>{currentProject.title}</Title>
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
          dispatch(setStatus('default'));
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
          dispatch(setStatus('default'));
        }}
      />
    </>
  ) : (
    <></>
  );
};

export default PublicProject;
