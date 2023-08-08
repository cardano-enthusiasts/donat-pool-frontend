import { type ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCreateFundraising } from 'shared/helpers/hooks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { reset } from 'store/slices/fundraisingCreation';

import {
  ButtonWrapper,
  DurationContainer,
  DurationInputContainer,
  DurationTitle,
  Form,
  FundingGoal,
  LabelHint,
} from './CreationForm.styled';
import { type FormError, type Props } from './types';
import {
  Button,
  Checkbox,
  Input,
  ModalError,
  ModalLoading,
  PrecalculationFee,
  ModalProjectCreated,
} from '..';

const CreationForm = ({ onClose, protocol }: Props) => {
  const { minAmountParam, maxAmountParam, minDurationParam, maxDurationParam } =
    protocol;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
  const {
    error: createError,
    status,
    path,
  } = useAppSelector((state) => state.fundraisingCreation);

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
    Number(data.durationDays) * 1440 +
    Number(data.durationHours) * 60 +
    Number(data.durationMinutes);
  const isDurationLessThanMin = durationMinutes < minDurationParam;
  const isDurationMoreThanMax = durationMinutes > maxDurationParam;
  const isAnyError =
    isTitleEmpty ||
    isGoalLessThanMin ||
    isGoalMoreThanMax ||
    isDurationLessThanMin ||
    isDurationMoreThanMax;

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

  const handleSubmit = (event) => {
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
    type:
      | 'title'
      | 'goal'
      | 'durationDays'
      | 'durationHours'
      | 'durationMinutes',
  ) => {
    event.preventDefault();
    setError(initialErrors);
    const { value } = event.target as HTMLInputElement;
    setData({ ...data, [type]: value });
    setError(initialErrors);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={data.title}
          onChange={(event) => {
            handleChange(event, 'title');
          }}
          isDisabled={status === 'requesting'}
          maxLength={29}
          placeholder="My project"
          error={error.title}
        >
          The title of the project
        </Input>
        <DurationContainer>
          <DurationTitle>
            Project duration
            <LabelHint>
              {' '}
              / Max: {Math.floor(maxDurationParam / 1440)} days
            </LabelHint>
          </DurationTitle>
          <DurationInputContainer>
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
          </DurationInputContainer>
        </DurationContainer>
        <FundingGoal>
          <Input
            value={data.goal}
            onChange={(event) => {
              handleChange(event, 'goal');
            }}
            type="number"
            placeholder={`${minAmountParam}`}
            hint={`MAX: ${maxAmountParam}`}
            error={error.goal}
          >
            Amount
            <LabelHint> / ADA</LabelHint>
          </Input>
          <PrecalculationFee goal={Number(data.goal)} />
        </FundingGoal>

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
        <ButtonWrapper>
          <Button
            type="button"
            onClick={onClose}
            themeType="double-bordered"
            primaryColor="blue"
            backgroundColor="white"
            size="m"
          >
            Cancel
          </Button>
          <Button
            themeType="standard"
            type="submit"
            isDisabled={!isChecked}
            primaryColor="red"
            secondaryColor="blue"
            width="100%"
            fontColor="white"
          >
            Confirm
          </Button>
        </ButtonWrapper>
      </Form>
      <ModalProjectCreated
        path={createdPath}
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
          navigate('/my-projects');
          dispatch(reset());
        }}
      />
      <ModalLoading isOpen={isLoadingModalOpen} />
      <ModalError
        isOpen={isErrorModalOpen}
        title="New project"
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
