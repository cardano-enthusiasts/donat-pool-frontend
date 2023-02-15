import styled from 'styled-components';

import { cardWrapper, h2 } from 'shared/styles/mixins';

const Wrapper = styled.div``;

const Title = styled.h2`
  ${h2}
`;

const Form = styled.div`
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
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export { Wrapper, Title, Form, Line, ButtonWrapper, InputWrapper };
