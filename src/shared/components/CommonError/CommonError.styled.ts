import styled from 'styled-components';

import { baseContainer } from 'shared/styles/mixins';

const Wrapper = styled.div`
  ${baseContainer};
  padding-top: 20px;
  padding-bottom: 20px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export { Wrapper };
