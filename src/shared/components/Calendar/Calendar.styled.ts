import styled from 'styled-components';

import { fieldStyles } from 'shared/styles/mixins';

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .react-datepicker-wrapper {
    max-width: 250px;
  }

  .react-datepicker__input-container {
    width: 100%;
    max-width: 250px;
    input {
      ${fieldStyles}
      width: 100%;
    }
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.colors.white};
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__day--in-range {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .react-datepicker__day--in-selecting-range {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export { CalendarWrapper };
