import { type ChangeEvent, useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';

import { useCreateFundraising } from 'shared/helpers/hooks';
import { type AppReduxState } from 'shared/types';

import {
  ButtonWrapper,
  DurationContainer,
  DurationInputContainer,
  DurationTitle,
  Form,
  FundingGoal,
  LabelHint,
} from './CreationForm.styled';
import { type Props } from './types';
import { Button, Checkbox, Input, ModalLoading, PrecalculationFee } from '..';
import { ModalProjectCreated } from '../ModalProjectCreated/ModalProjectCreated';

const CreationForm = ({ onClose }: Props) => {
  const createFundraising = useCreateFundraising();
  const [isChecked, setIsChecked] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isLoadingModalOpen, setIsLoadingModalOpen] = useState(true);
  const [data, setData] = useState({
    title: '',
    description: '',
    goal: '',
    durationDays: '',
    durationHours: '',
    durationMinutes: '',
  });
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.fundraising.communication.create
  );

  useEffect(() => {
    setIsLoadingModalOpen(isRequesting);
  }, [isRequesting]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const createFundraisingParams = {
      description: data.title,
      amount: Number(data.goal),
      duration: {
        days: Number(data.durationDays),
        hours: Number(data.durationHours),
        minutes: Number(data.durationMinutes),
      },
    };
    createFundraising(createFundraisingParams);
  };

  const handleChange = (
    event: ChangeEvent,
    type:
      | 'title'
      | 'description'
      | 'goal'
      | 'durationDays'
      | 'durationHours'
      | 'durationMinutes'
  ) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;
    setData({ ...data, [type]: value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={data.title}
          onChange={(event) => {
            handleChange(event, 'title');
          }}
          isDisabled={isRequesting}
          maxLength={29}
          placeholder="My project"
        >
          The title of the project
        </Input>
        <DurationContainer>
          <DurationTitle>
            Project duration <LabelHint>/ Max: 90 days</LabelHint>
          </DurationTitle>
          <DurationInputContainer>
            <Input
              value={data.durationDays}
              onChange={(event) => {
                handleChange(event, 'durationDays');
              }}
              type="number"
              placeholder="dd"
            />
            <Input
              value={data.durationHours}
              onChange={(event) => {
                handleChange(event, 'durationHours');
              }}
              type="number"
              placeholder="hh"
            />
            <Input
              value={data.durationMinutes}
              onChange={(event) => {
                handleChange(event, 'durationMinutes');
              }}
              type="number"
              placeholder="mm"
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
            placeholder="10"
          >
            Amount <LabelHint> / ADA</LabelHint>
          </Input>
          <PrecalculationFee goal={data.goal} />
        </FundingGoal>

        <Checkbox
          isChecked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        >
          I agree to pay a commission in favor of the service.
          <br />
          The commission will be debited after the end of the donating pull.
        </Checkbox>
        <ButtonWrapper>
          <Button
            type="button"
            onClick={onClose}
            themeType="tertiary"
            primaryColor="blue"
            size="m"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            isDisabled={!isChecked}
            primaryColor="red"
            secondaryColor="blue"
            width="100%"
          >
            Confirm
          </Button>
        </ButtonWrapper>
      </Form>
      <ModalProjectCreated
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
        }}
      />
      <ModalLoading isOpen={isLoadingModalOpen} />
    </>
  );
};

export { CreationForm };
