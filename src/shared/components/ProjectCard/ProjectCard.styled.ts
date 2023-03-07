import styled from 'styled-components';

import { cardWrapper, h3 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  ${cardWrapper};
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 10px;
`;
const Item = styled.div``;
const Title = styled.h3`
  ${h3};
  margin: 0 0 20px 0;
`;

export { Wrapper, Item, Items, Title };
