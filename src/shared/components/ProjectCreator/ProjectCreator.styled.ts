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

export { Form, Title };
