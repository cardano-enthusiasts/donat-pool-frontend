import { type ChangeEvent, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import { useCreateFundraising } from 'shared/helpers/hooks';
import { theme } from 'shared/styles/theme';
import { type AppReduxState } from 'shared/types';

import {
  ButtonWrapper,
  DurationContainer,
  DurationInputContainer,
  DurationTitle,
  Form,
  Loader,
  Title,
} from './ProjectCreator.styled';
import { type Props } from './types';
import { Button, Calendar, Checkbox, Input } from '..';

const ProjectCreator = ({ onClose }: Props) => {
  const createFundraising = useCreateFundraising();
  const [isChecked, setIsChecked] = useState(false);
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
    const { value } = event.target as HTMLInputElement;
    console.log(value);
    setData({ ...data, [type]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create a new project</Title>
      <Input
        title="the title of the project"
        value={data.title}
        onChange={(event) => {
          handleChange(event, 'title');
        }}
        isDisabled={isRequesting}
        maxLength={29}
      />
      <Input
        title="Description (purpose of fundraising)"
        multiline={true}
        value={data.description}
        onChange={(event) => {
          handleChange(event, 'description');
        }}
        isDisabled={true}
      />
      <Input
        title="funding goal"
        value={data.goal}
        onChange={(event) => {
          handleChange(event, 'goal');
        }}
        type="number"
        isDisabled={isRequesting}
      />

      <DurationContainer>
        <DurationTitle>Duration</DurationTitle>
        <DurationInputContainer>
          <Input
            title="days"
            value={data.durationDays}
            onChange={(event) => {
              handleChange(event, 'durationDays');
            }}
            type="number"
            isDisabled={isRequesting}
          />
          <Input
            title="hours"
            value={data.durationHours}
            onChange={(event) => {
              handleChange(event, 'durationHours');
            }}
            type="number"
            isDisabled={isRequesting}
          />
          <Input
            title="minutes"
            value={data.durationMinutes}
            onChange={(event) => {
              handleChange(event, 'durationMinutes');
            }}
            type="number"
            isDisabled={isRequesting}
          />
        </DurationInputContainer>
      </DurationContainer>

      <Calendar isDisabled={true} />
      <Checkbox
        isChecked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        title="I agree that service charges 2.00 ADA for donation pool creation"
      />
      <ButtonWrapper>
        <Button type="submit" isDisabled={!isChecked || isRequesting}>
          Publish
        </Button>
        <Button
          type="button"
          onClick={onClose}
          theme="bordered"
          isDisabled={isRequesting}
        >
          Cancel
        </Button>
      </ButtonWrapper>
      <Loader isLoading={isRequesting}>
        <BeatLoader
          color={theme.colors.secondary}
          loading={isRequesting}
          size={20}
          aria-label="Loading beat"
          data-testid="loader"
        />
      </Loader>
    </Form>
  );
};

export { ProjectCreator };
