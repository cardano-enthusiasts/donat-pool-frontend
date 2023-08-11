'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Common } from '@/layouts';
import { Button, ModalDonate, ModalError, ModalLoading, ModalSuccess, RaisedCounter } from '@/shared/components';
import { formatDate } from '@/shared/helpers';
import { useAllFundraisings, useAuthGuard } from '@/shared/hooks';
import { useDonate } from '@/shared/hooks';
import type { Fundraising } from '@/shared/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { reset } from '@/store/slices/donating';

const Page = () => {
  useAuthGuard();
  const params = useParams();
  const dispatch = useAppDispatch();
  const { fundraisings } = useAllFundraisings();
  const [currentProject, setCurrentProject] = useState<Fundraising | null>(null);
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
    if (fundraisings) {
      const project = fundraisings.find(({ threadTokenCurrency }) => threadTokenCurrency === params.id);
      if (project) {
        setCurrentProject(project);
      } else {
        setCurrentProject(null);
      }
    }
  }, [fundraisings, params.id]);

  return (
    currentProject && (
      <>
        <Common>
          <div className="pb-40 pt-20">
            <h1 className="mb-6 overflow-hidden text-ellipsis whitespace-nowrap text-center">
              {currentProject.title}
            </h1>
            <div className="border-b-2 border-t-2 border-black py-6 text-center text-5 font-bold">
              Until {formatDate(Number(currentProject.deadline.value))}{' '}
            </div>
            <div className="mx-0 mb-10 mt-6">
              <RaisedCounter
                raised={Number(currentProject.raisedAmt.value) / 1000000}
                goal={Number(currentProject.goal.value) / 1000000}
              />
            </div>

            <div className="flex justify-center">
              <Button
                themeType="accent"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Donate
              </Button>
            </div>
          </div>
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
    )
  );
};

export default Page;
