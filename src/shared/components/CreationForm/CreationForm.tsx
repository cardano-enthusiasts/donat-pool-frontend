import { useRouter } from 'next/navigation';
import { type ChangeEvent, useState, useEffect } from 'react';

import { reset } from '@/redux/slices/fundraisingCreation';
import { ROUTES } from '@/shared/constants';
import { useAppDispatch, useAppSelector, useCreateFundraising } from '@/shared/hooks';

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

function CreationForm({ onClose, protocol }: Props) {
  const { minAmountParam, maxAmountParam, minDurationParam, maxDurationParam } = protocol;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [createdPath, setCreatedPath] = useState('');
  const createFundraising = useCreateFundraising();
  const [checked, setChecked] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
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
      setSuccessModalIsOpen(true);
    }
    if (status === 'error') {
      setErrorModalIsOpen(true);
    }
  }, [status, path]);

  const initialErrors = {
    title: null,
    duration: null,
    goal: null,
  };
  const [error, setError] = useState<FormError>(initialErrors);

  const titleEmpty = data.title === '';
  const goalLessThanMin = Number(data.goal) < minAmountParam;
  const goalMoreThanMax = Number(data.goal) > maxAmountParam;
  const durationMinutes =
    Number(data.durationDays) * 1440 + Number(data.durationHours) * 60 + Number(data.durationMinutes);
  const durationLessThanMin = durationMinutes < minDurationParam;
  const durationMoreThanMax = durationMinutes > maxDurationParam;
  const anyError = titleEmpty || goalLessThanMin || goalMoreThanMax || durationLessThanMin || durationMoreThanMax;

  function setErrorsToForm() {
    const title = titleEmpty ? 'Please fill in the title field' : null;
    const goal = goalLessThanMin
      ? 'The amount is less than the minimum value'
      : goalMoreThanMax
      ? 'The amount is more than the maximum value'
      : null;
    const duration = durationLessThanMin
      ? 'The duration is less than the minimum value'
      : durationMoreThanMax
      ? 'The duration is more than the maximum value'
      : null;

    setError({
      title,
      goal,
      duration,
    });
  }

  useEffect(() => {
    setLoadingModalIsOpen(status === 'requesting');
  }, [status]);

  function handleSubmit(event: any) {
    event.preventDefault();
    if (anyError) {
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
  }

  function handleChange(
    event: ChangeEvent,
    type: 'title' | 'goal' | 'durationDays' | 'durationHours' | 'durationMinutes',
  ) {
    event.preventDefault();
    setError(initialErrors);
    const { value } = event.target as HTMLInputElement;
    setData({ ...data, [type]: value });
    setError(initialErrors);
  }

  function handleCheckboxChange() {
    setChecked((c) => !c);
  }

  function handleProjectCreatedModalClose() {
    setSuccessModalIsOpen(false);
    router.push(ROUTES.userFundraisings);
    dispatch(reset());
  }

  function handleErrorModalClose() {
    setErrorModalIsOpen(false);
    dispatch(reset());
  }

  return (
    <>
      <form className="grid w-full max-w-[37.5rem] grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
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
        <Checkbox checked={checked} onChange={handleCheckboxChange}>
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
            disabled={!checked}
            primaryColor="red"
            secondaryColor="blue"
            isFullWidth
            fontColor="white"
          >
            Confirm
          </StandardButton>
        </div>
      </form>
      <ModalProjectCreated path={createdPath} open={successModalIsOpen} onClose={handleProjectCreatedModalClose} />
      <ModalLoading open={loadingModalIsOpen} />
      <ModalError
        open={errorModalIsOpen}
        title="New Donat.Pool"
        errorText={createError}
        onClose={handleErrorModalClose}
      />
    </>
  );
}

export default CreationForm;
