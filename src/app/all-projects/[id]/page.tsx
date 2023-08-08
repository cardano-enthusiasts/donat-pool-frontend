'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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
import { useDonate } from '@/shared/helpers/hooks';
import { useAllFundraisings, useAuthGuard } from '@/shared/hooks';
import { type Fundraising } from '@/shared/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { reset } from '@/store/slices/donating';

import {
  ButtonWrapper,
  CounterWrapper,
  Duration,
  Title,
  Wrapper,
} from './PublicProject.styled';

const Page = () => {
  useAuthGuard();
  const params = useParams();
  const dispatch = useAppDispatch();
  const { allFundraisings } = useAllFundraisings();
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
          <Duration>
            Until {getDate(Number(currentProject.deadline.value))}{' '}
          </Duration>
          <CounterWrapper>
            <RaisedCounter
              raised={Number(currentProject.raisedAmt.value) / 1000000}
              goal={Number(currentProject.goal.value) / 1000000}
            />
          </CounterWrapper>

          <ButtonWrapper>
            <Button
              themeType="accent"
              onClick={() => {
                setIsModalOpen(true);
              }}
              primaryColor="yellow"
              secondaryColor="red"
              fontColor="red"
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
          dispatch(reset());
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
          dispatch(reset());
        }}
      />
    </>
  ) : (
    <></>
  );
};

export default Page;
