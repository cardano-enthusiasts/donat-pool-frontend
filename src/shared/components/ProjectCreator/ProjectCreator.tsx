import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Form, Title } from './ProjectCreator.styled';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';

const ProjectCreator = () => {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create a new project</Title>
      <Input title="the title of the project" value={''} onChange={() => {}} />
      <Input
        title="Description (purpose of fundraising)"
        value={''}
        onChange={() => {}}
      />
      <Input title="funding goal" value={''} onChange={() => {}} />
      <>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => {
            setEndDate(date);
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </>
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
