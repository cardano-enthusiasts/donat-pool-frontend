import styled from 'styled-components';

import { h3 } from 'shared/styles/mixins';

const StyledInput = styled.input`
  width: 100%;
  max-width: 320px;
  min-width: 150px;
  border: 1px solid ${({ theme }) => theme.colors.dark25};
  border-radius: 4px;
  width: 100%;
  padding: 14px 14px 13px;
  outline: none;
  color: ${({ theme }) => theme.colors.dark75};
  @include placeholder {
    font-family: Montserrat, Arial, sans-serif;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.dark75};
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.dark50};
  }
`;

const Title = styled.h3`
  ${h3};
  margin: 0 0 5px 0;
`;

export { StyledInput, Title };
