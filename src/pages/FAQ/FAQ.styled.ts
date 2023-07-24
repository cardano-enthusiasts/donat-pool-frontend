import styled from 'styled-components';

import { h1 } from 'shared/styles/mixins';

const Title = styled.h1`
  ${h1};
  margin-bottom: 32px;
`;

const ColorTitle = styled.span`
  ${h1};
  color: ${({ theme }) => theme.colors.green};
`;

export { Title, ColorTitle };
