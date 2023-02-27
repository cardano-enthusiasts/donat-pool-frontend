import styled from 'styled-components';

import { h2, h3 } from 'shared/styles/mixins';

const Wrapper = styled.div``;

const Title = styled.h2`
  ${h2};
  margin: 0 0 20px 0;
`;

const Item = styled.div`
  ${h3};
  font-size: 16px;
  margin-bottom: 10px;
`;

export { Wrapper, Title, Item };
