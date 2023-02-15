import styled from 'styled-components';

import { fieldStyles } from 'shared/styles/mixins';

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }

  .react-datepicker-wrapper {
    max-width: 250px;
    width: 45%;
    @media (max-width: 700px) {
      width: 100%;
      max-width: none;
    }
  }

  .react-datepicker__input-container {
    max-width: 250px;
    input {
      ${fieldStyles}
      width: 100%;
    }
    @media (max-width: 700px) {
      max-width: none;
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
