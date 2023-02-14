import styled from 'styled-components';

import { cardWrapper, h2 } from 'shared/styles/mixins';

const Inner = styled.div`
  ${cardWrapper};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2`
  ${h2}
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemTitle = styled.div``;
const Amount = styled.div``;

export { Inner, Title, Line, ItemTitle, Amount };
