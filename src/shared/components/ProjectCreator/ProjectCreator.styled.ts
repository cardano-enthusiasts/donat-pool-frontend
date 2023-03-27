import styled from 'styled-components';

import { h2 } from 'shared/styles/mixins';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h2`
  ${h2};
  margin: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
`;

const Loader = styled.div<{ isLoading: boolean }>`
  display: flex;
  justify-content: center;
  ${({ isLoading }) => !isLoading && 'padding-bottom: 24px'}
`;

export { Form, Title, ButtonWrapper, Loader };