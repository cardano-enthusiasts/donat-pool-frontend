'use client';

import { useEffect, useState } from 'react';

import { Common } from '@/layouts';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { reset } from '@/redux/slices/donating';
import { Button, ModalDonate, ModalError, ModalLoading, ModalSuccess, RaisedCounter } from '@/shared/components';
import { formatDate } from '@/shared/helpers';
import { useQueriedFundraising } from '@/shared/hooks';
import { useDonate } from '@/shared/hooks';

import { ButtonWrapper, CounterWrapper, Duration, Title, Wrapper } from './PublicProject.styled';

const Page = () => {
  const dispatch = useAppDispatch();
  const {
    isBeingFetched: fundraisingIsBeingFetched,
    fundraising,
    error: fetchFundraisingError,
  } = useQueriedFundraising();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const [isModalLoadingOpen, setIsModalLoadingOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const donate = useDonate();

  const donateStatus = useAppSelector((state) => state.donating.status);
  const donateError = useAppSelector((state) => state.donating.error);

  useEffect(() => {
    const isRequesting = donateStatus === 'requesting';
    setIsModalLoadingOpen(isRequesting);

    const isSuccessfully = donateStatus === 'success';
    const isError = donateStatus === 'error';
    if (isRequesting || isSuccessfully || isError) {
      setIsModalOpen(false);
    }
    if (isSuccessfully) {
      setIsModalSuccessOpen(true);
    }
    if (isError) {
      setIsModalErrorOpen(true);
    }
  }, [donateStatus]);

  return (
    <>
      <Common>
        {fundraisingIsBeingFetched && <div>fundraising is being fetched</div>}
        {fundraising && (
          <Wrapper>
            <Title>{fundraising.title}</Title>
            <Duration>Until {formatDate(Number(fundraising.deadline))} </Duration>
            <CounterWrapper>
              <RaisedCounter
                raised={Number(fundraising.raisedAmt) / 1000000}
                goal={Number(fundraising.goal) / 1000000}
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
        )}
        {fetchFundraisingError && <div className="text-error">An error happened while fetching the fundraising</div>}
      </Common>
      {fundraising && (
        <ModalDonate
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          data={{
            threadTokenCurrency: fundraising.threadTokenCurrency,
            threadTokenName: fundraising.threadTokenName,
          }}
          donate={donate}
        />
      )}
      <ModalError
        isOpen={isModalErrorOpen}
        title="How many ADA would you like to donate?"
        errorText={donateError}
        onClose={() => {
          setIsModalErrorOpen(false);
          dispatch(reset());
        }}
      />
      <ModalLoading isOpen={isModalLoadingOpen} title="How many ADA would you like to donate?" />
      <ModalSuccess
        isOpen={isModalSuccessOpen}
        description="Congratulations! Your donut is ready!"
        onClose={() => {
          setIsModalSuccessOpen(false);
          dispatch(reset());
        }}
      />
    </>
  );
};

export default Page;
