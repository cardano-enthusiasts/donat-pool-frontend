import styled from 'styled-components';

import { cardWrapper } from 'shared/styles/mixins';

const Inner = styled.div`
  ${cardWrapper};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Line = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  gap: 20px;
`;
const ItemTitle = styled.div``;
const AmountAndLabel = styled.div`
  display: grid;
  grid-template-columns: max-content 40px;
  gap: 10px;
`;

export { Inner, Line, ItemTitle, AmountAndLabel };
