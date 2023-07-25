import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  width: 100%;
  max-width: 600px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const DurationContainer = styled.div``;

const DurationTitle = styled.div`
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
  gap: 8px;
`;

const LabelHint = styled.span`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export {
  Form,
  ButtonWrapper,
  DurationContainer,
  DurationTitle,
  DurationInputContainer,
  FundingGoal,
  LabelHint,
};
