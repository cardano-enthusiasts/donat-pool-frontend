import styled from 'styled-components';

import { baseContainer, baseInner } from 'shared/styles/mixins';

const Main = styled.main`
  ${baseContainer}
`;

const Inner = styled.div`
  ${baseInner}
`;

export { Main, Inner };
