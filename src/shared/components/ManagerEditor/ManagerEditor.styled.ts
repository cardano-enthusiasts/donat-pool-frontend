import styled from 'styled-components';

import { cardWrapper } from 'shared/styles/mixins';

const Wrapper = styled.div``;

const Form = styled.form`
  ${cardWrapper};
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export { Wrapper, Form, Line, ButtonWrapper, InputWrapper };
