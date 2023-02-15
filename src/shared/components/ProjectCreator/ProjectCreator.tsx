import { type ChangeEvent, useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import { Form, Title } from './ProjectCreator.styled';
import Button from '../Button/Button';
import Calendar from '../Calendar/Calendar';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';

const ProjectCreator = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    goal: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  const handleChange = (
    event: ChangeEvent,
    type: 'title' | 'description' | 'goal'
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
      />
      <Input
        title="funding goal"
        value={data.goal}
        onChange={(event) => {
          handleChange(event, 'goal');
        }}
        multiline={true}
      />
      <Calendar />
      <Checkbox
        isChecked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        title="I agree that service charges 2.00 ADA for donation pool creation"
      />
      <Button type="submit" isDisabled={!isChecked}>
        Publish
      </Button>
    </Form>
  );
};

export default ProjectCreator;
