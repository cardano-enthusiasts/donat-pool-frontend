import styled from 'styled-components';

import { h1 } from 'shared/styles/mixins';

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Title = styled.h1`
  ${h1}
`;

const Description = styled.div`
  font-size: 16px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  margin-top: 40px;
`;

export { Inner, Title, Description, ButtonsWrapper };
