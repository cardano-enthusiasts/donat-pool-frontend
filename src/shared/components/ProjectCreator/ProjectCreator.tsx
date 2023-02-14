import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Form } from './ProjectCreator.styled';
import Input from '../Input/Input';

const ProjectCreator = () => {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/10'));

  return (
    <Form>
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
    </Form>
  );
};

export default ProjectCreator;
