import { type ChangeEvent, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import { useCreateFundraising } from 'shared/helpers/hooks';
import { theme } from 'shared/styles/theme';
import { type AppReduxState } from 'shared/types';

import { ButtonWrapper, Form, Loader, Title } from './ProjectCreator.styled';
import { type Props } from './types';
import { Button, Calendar, Checkbox, Input } from '..';

const ProjectCreator = ({ onClose }: Props) => {
  const createFundraising = useCreateFundraising();
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    goal: '',
    duration: '',
  });
  const { isRequesting } = useSelector(
    (state: AppReduxState) => state.info.communication.createFundraising
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const createFundraisingParams = {
      description: data.title,
      amount: Number(data.goal),
      duration: Number(data.duration),
    };
    createFundraising(createFundraisingParams);
  };

  const handleChange = (
    event: ChangeEvent,
    type: 'title' | 'description' | 'goal' | 'duration'
  ) => {
    const { value } = event.target as HTMLInputElement;
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
      <Input
        title="duration"
        value={data.duration}
        onChange={(event) => {
          handleChange(event, 'duration');
        }}
        type="number"
        isDisabled={isRequesting}
      />
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
