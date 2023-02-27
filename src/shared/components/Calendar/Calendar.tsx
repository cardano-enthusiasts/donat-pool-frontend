import { useState } from 'react';
import DatePicker from 'react-datepicker';

import { CalendarWrapper } from './Calendar.styled';
import { type Props } from './types';

const Calendar = ({ isDisabled }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <CalendarWrapper>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        disabled={isDisabled}
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
        disabled={isDisabled}
      />
    </CalendarWrapper>
  );
};

export default Calendar;
