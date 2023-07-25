import styled from 'styled-components';

import { baseContainer, baseInner } from 'shared/styles/mixins';

const Main = styled.main`
  ${baseContainer}
`;

const Inner = styled.div`
  ${baseInner};
  margin: 80px 0 160px;
  max-width: 790px;
  @media (max-width: 600px) {
    margin: 40px 0 60px;
  }
`;

export { Main, Inner };
