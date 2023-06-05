import styled from 'styled-components';

import { h3 } from 'shared/styles/mixins';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  width: 100%;
  max-width: 600px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 30px;
`;

const DurationContainer = styled.div``;

const DurationTitle = styled.div`
  ${h3};
  margin-bottom: 0;
`;

const DurationInputContainer = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FundingGoal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export {
  Form,
  ButtonWrapper,
  DurationContainer,
  DurationTitle,
  DurationInputContainer,
  FundingGoal,
};
