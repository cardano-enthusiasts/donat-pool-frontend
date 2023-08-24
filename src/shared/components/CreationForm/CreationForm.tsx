import { useRouter } from 'next/navigation';
import { type ChangeEvent, useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { reset } from '@/redux/slices/fundraisingCreation';
import { ROUTES } from '@/shared/constants';
import { useCreateFundraising } from '@/shared/hooks';

import type { FormError, Props } from './types';
import {
  Checkbox,
  Input,
  ModalError,
  ModalLoading,
  PrecalculationFee,
  ModalProjectCreated,
  StandardButton,
  DoubleBorderedButton,
} from '..';

const CreationForm = ({ onClose, protocol }: Props) => {
  const { minAmountParam, maxAmountParam, minDurationParam, maxDurationParam } = protocol;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [createdPath, setCreatedPath] = useState('');
  const createFundraising = useCreateFundraising();
  const [isChecked, setIsChecked] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    goal: '',
    durationDays: '',
    durationHours: '',
    durationMinutes: '',
  });
  const { error: createError, status, path } = useAppSelector((state) => state.fundraisingCreation);

  useEffect(() => {
    if (status === 'success' && path) {
      setCreatedPath(path);
      setIsSuccessModalOpen(true);
    }
    if (status === 'error') {
      setIsErrorModalOpen(true);
    }
  }, [status, path]);

  const initialErrors = {
    title: null,
    duration: null,
    goal: null,
  };
  const [error, setError] = useState<FormError>(initialErrors);

  const isTitleEmpty = data.title === '';
  const isGoalLessThanMin = Number(data.goal) < minAmountParam;
  const isGoalMoreThanMax = Number(data.goal) > maxAmountParam;
  const durationMinutes =
    Number(data.durationDays) * 1440 + Number(data.durationHours) * 60 + Number(data.durationMinutes);
  const isDurationLessThanMin = durationMinutes < minDurationParam;
  const isDurationMoreThanMax = durationMinutes > maxDurationParam;
  const isAnyError =
    isTitleEmpty || isGoalLessThanMin || isGoalMoreThanMax || isDurationLessThanMin || isDurationMoreThanMax;

  const setErrorsToForm = () => {
    const title = isTitleEmpty ? 'Please fill in the title field' : null;
    const goal = isGoalLessThanMin
      ? 'The amount is less than the minimum value'
      : isGoalMoreThanMax
      ? 'The amount is more than the maximum value'
      : null;
    const duration = isDurationLessThanMin
      ? 'The duration is less than the minimum value'
      : isDurationMoreThanMax
      ? 'The duration is more than the maximum value'
      : null;

    setError({
      title,
      goal,
      duration,
    });
  };

  useEffect(() => {
    setIsLoadingModalOpen(status === 'requesting');
  }, [status]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (isAnyError) {
      setErrorsToForm();
    } else {
      const createFundraisingParams = {
        title: data.title,
        amount: Number(data.goal),
        duration: {
          days: Number(data.durationDays),
          hours: Number(data.durationHours),
          minutes: Number(data.durationMinutes),
        },
      };
      createFundraising(createFundraisingParams);
    }
  };

  const handleChange = (
    event: ChangeEvent,
    type: 'title' | 'goal' | 'durationDays' | 'durationHours' | 'durationMinutes',
  ) => {
    event.preventDefault();
    setError(initialErrors);
    const { value } = event.target as HTMLInputElement;
    setData({ ...data, [type]: value });
    setError(initialErrors);
  };

  return (
    <>
      <form className="grid w-full max-w-[37.5rem] grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
        <Input
          value={data.title}
          onChange={(event) => {
            handleChange(event, 'title');
          }}
          isDisabled={status === 'requesting'}
          maxLength={29}
          placeholder="My Donat.Pool"
          error={error.title}
        >
          The title of the Donat.Pool
        </Input>
        <div>
          <div className="mb-0">
            Donat.Pool duration
            <span className="text-gray"> / Max: {Math.floor(maxDurationParam / 1440)} days</span>
          </div>
          <div className="flex gap-2.5 max-sm:flex-col">
            <Input
              value={data.durationDays}
              onChange={(event) => {
                handleChange(event, 'durationDays');
              }}
              type="number"
              placeholder="dd"
              error={error.duration ? '' : null}
            />
            <Input
              value={data.durationHours}
              onChange={(event) => {
                handleChange(event, 'durationHours');
              }}
              type="number"
              placeholder="hh"
              error={error.duration ? '' : null}
            />
            <Input
              value={data.durationMinutes}
              onChange={(event) => {
                handleChange(event, 'durationMinutes');
              }}
              type="number"
              placeholder="mm"
              error={error.duration}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            value={data.goal}
            onChange={(event) => {
              handleChange(event, 'goal');
            }}
            type="number"
            placeholder={`${minAmountParam}`}
            hint={`MAX: ${maxAmountParam}`}
            error={error.goal}
            data-hint={`MAX: ${maxAmountParam}`}
          >
            Amount
            <span className="text-gray"> / ADA</span>
          </Input>
          <PrecalculationFee goal={Number(data.goal)} />
        </div>

        <Checkbox
          isChecked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        >
          I agree to pay a commission in favor of the service.
          <br />
          The commission will be debited after the end of the donation pool.
        </Checkbox>
        <div className="flex gap-6">
          <DoubleBorderedButton primaryColor="blue" backgroundColor="white" onClick={onClose}>
            Cancel
          </DoubleBorderedButton>
          <StandardButton
            type="submit"
            isDisabled={!isChecked}
            primaryColor="red"
            secondaryColor="blue"
            isFullWidth={true}
            fontColor="white"
          >
            Confirm
          </StandardButton>
        </div>
      </form>
      <ModalProjectCreated
        path={createdPath}
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
          router.push(ROUTES.userFundraisings);
          dispatch(reset());
        }}
      />
      <ModalLoading isOpen={isLoadingModalOpen} />
      <ModalError
        isOpen={isErrorModalOpen}
        title="New Donat.Pool"
        errorText={createError}
        onClose={() => {
          setIsErrorModalOpen(false);
          dispatch(reset());
        }}
      />
    </>
  );
};

export { CreationForm };
