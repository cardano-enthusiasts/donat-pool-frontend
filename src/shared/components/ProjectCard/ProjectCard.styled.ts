import styled from 'styled-components';

import { cardWrapper, h3 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  ${cardWrapper};
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: max-content 2fr;
  justify-items: center;
  row-gap: 10px;
  column-gap: 30px;
  margin-bottom: 30px;
`;
const Item = styled.div``;
const Title = styled.h3`
  ${h3};
  margin: 0 0 20px 0;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export { Wrapper, Item, Items, Title, ButtonWrapper };
