'use client';

import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { reset } from '@/redux/slices/createFundraising';
import backEnd from '@/shared/backEnd';
import {
  Checkbox,
  Input,
  ModalError,
  ModalLoading,
  PrecalculationFee,
  ModalProjectCreated,
  SecondaryButton,
  PrimaryButton,
} from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { useCreateDonatPool } from '@/shared/hooks';

import type { FormError, ModerationResponse, Props } from './types';

function CreationForm({ protocol, onClose }: Props) {
  const { minAmountParam, maxAmountParam, minDurationParam, maxDurationParam } = protocol;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [createdPath, setCreatedPath] = useState('');
  const createDonatPool = useCreateDonatPool();
  const [checked, setChecked] = useState(false);
  const [successModalIsShown, setSuccessModalIsShown] = useState(false);
  const [loadingModalIsShown, setLoadingModalIsShown] = useState(false);
  const [errorModalIsShown, setErrorModalIsShown] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    goal: '',
    durationDays: '',
    durationHours: '',
    durationMinutes: '',
  });
  const [backEndError, setBackEndError] = useState<string | null>(null);
  const { error: createError, status, path } = useAppSelector((state) => state.createFundraising);

  useEffect(() => {
    if (status === 'success' && path) {
      setCreatedPath(path);
      setSuccessModalIsShown(true);
    }
    if (status === 'error') {
      setErrorModalIsShown(true);
    }
  }, [status, path]);

  const initialErrors = {
    title: null,
    duration: null,
    goal: null,
  };
  const [error, setError] = useState<FormError>(initialErrors);

  const titleIsEmpty = data.title === '';
  const goalIsLessThanMin = Number(data.goal) < minAmountParam;
  const goalIsMoreThanMax = Number(data.goal) > maxAmountParam;
  const durationMinutes =
    Number(data.durationDays) * 1440 + Number(data.durationHours) * 60 + Number(data.durationMinutes);
  const durationIsLessThanMin = durationMinutes < minDurationParam;
  const durationIsMoreThanMax = durationMinutes > maxDurationParam;
  const anyError =
    titleIsEmpty || goalIsLessThanMin || goalIsMoreThanMax || durationIsLessThanMin || durationIsMoreThanMax;

  function getTitleError(isAcceptable: boolean) {
    if (titleIsEmpty) {
      return 'Please fill in the title field';
    } else if (!isAcceptable) {
      return 'Please enter a valid title';
    }
    return null;
  }

  function setErrorsToForm(isAcceptable: boolean) {
    const title = getTitleError(isAcceptable);
    const goal = goalIsLessThanMin
      ? 'The amount is less than the minimum value'
      : goalIsMoreThanMax
      ? 'The amount is more than the maximum value'
      : null;
    const duration = durationIsLessThanMin
      ? 'The duration is less than the minimum value'
      : durationIsMoreThanMax
      ? 'The duration is more than the maximum value'
      : null;

    setError({
      title,
      goal,
      duration,
    });
  }

  useEffect(() => {
    setLoadingModalIsShown(status === 'requesting');
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await backEnd.post<ModerationResponse>('moderation-api/check-text/', {
        text: data.title,
      });
      const isAcceptable = response.data.is_acceptable;

      if (anyError || !isAcceptable) {
        setErrorsToForm(isAcceptable);
      } else {
        const createDonatPoolParams = {
          title: data.title,
          amount: Number(data.goal),
          duration: {
            days: Number(data.durationDays),
            hours: Number(data.durationHours),
            minutes: Number(data.durationMinutes),
          },
        };
        createDonatPool(createDonatPoolParams);
      }
    } catch (error) {
      setErrorModalIsShown(true);
      setBackEndError(isAxiosError(error) ? String(error.message) : 'Unknown error');
    }
  }

  function handleChange(
    event: React.ChangeEvent,
    type: 'title' | 'goal' | 'durationDays' | 'durationHours' | 'durationMinutes',
  ) {
    event.preventDefault();
    setError(initialErrors);
    const { value } = event.target as HTMLInputElement;
    setData({ ...data, [type]: value });
    setError(initialErrors);
  }

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  function handleProjectCreatedModalClose() {
    setSuccessModalIsShown(false);
    router.push(ROUTES.myDonatPools);
    dispatch(reset());
  }

  function handleErrorModalClose() {
    setErrorModalIsShown(false);
    setBackEndError(null);
    dispatch(reset());
  }

  return (
    <>
      <form className="grid w-full max-w-[37.5rem] grid-cols-1 gap-y-6" onSubmit={(event) => void handleSubmit(event)}>
        <Input
          value={data.title}
          onChange={(event) => {
            handleChange(event, 'title');
          }}
          disabled={status === 'requesting'}
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
        <Checkbox checked={checked} textTheme="black" onChange={handleCheckboxChange}>
          I agree to pay a commission in favor of the service.
          <br />
          The commission will be debited after the end of the donation pool.
        </Checkbox>
        <div className="flex gap-6">
          <SecondaryButton size="lg" textColor="blue" shadowColor="whiteBlue" onClick={onClose}>
            Cancel
          </SecondaryButton>
          <PrimaryButton stretchy size="lg" type="submit" disabled={!checked}>
            Confirm
          </PrimaryButton>
        </div>
      </form>
      {successModalIsShown && <ModalProjectCreated path={createdPath} onClose={handleProjectCreatedModalClose} />}
      {loadingModalIsShown && <ModalLoading />}
      {errorModalIsShown && (
        <ModalError
          title="New Donat.Pool"
          errorText={backEndError ? backEndError : createError}
          onClose={handleErrorModalClose}
        />
      )}
    </>
  );
}

export default CreationForm;
