import { type ChangeEvent, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';

import { useOffchain } from 'shared/hooks/useOffchain';
import { theme } from 'shared/styles/theme';

import { ButtonWrapper, Form, Loader, Title } from './ProjectCreator.styled';
import { type Props } from './types';
import fixedProtocol from '../../../../startProtocolParams';
import Button from '../Button/Button';
import Calendar from '../Calendar/Calendar';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';

const ProjectCreator = ({ onClose }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    goal: '',
    duration: '',
  });
  const offchain = useOffchain();

  const handleCreateFundraisingComplete = (fundraisingData) => {
    console.log(fundraisingData);
    toast.success('fundraising was created successfully');
    setIsLoading(false);
  };
  const handleCreateFundraisingError = (error) => {
    toast.error(error);
    setIsLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const createFundraisingParams = {
      description: data.title,
      amount: Number(data.goal),
      duration: Number(data.duration),
    };
    setIsLoading(true);
    offchain.createFundraising(handleCreateFundraisingComplete)(
      handleCreateFundraisingError
    )(fixedProtocol)(createFundraisingParams)();
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
      />
      <Input
        title="duration"
        value={data.duration}
        onChange={(event) => {
          handleChange(event, 'duration');
        }}
        type="number"
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
        <Button type="submit" isDisabled={!isChecked}>
          Publish
        </Button>
        <Button type="button" onClick={onClose} theme="bordered">
          Cancel
        </Button>
      </ButtonWrapper>
      <Loader>
        {isLoading && (
          <ReactLoading color={theme.colors.secondary} height={40} />
        )}
      </Loader>
    </Form>
  );
};

export default ProjectCreator;
