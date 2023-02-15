import { useState } from 'react';
import DatePicker from 'react-datepicker';

import { CalendarWrapper } from './Calendar.styled';

const Calendar = () => {
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
    </CalendarWrapper>
  );
};

export default Calendar;
