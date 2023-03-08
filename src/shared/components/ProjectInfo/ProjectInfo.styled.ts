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
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 30px;
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  max-width: 200px;
`;

export { Wrapper, Title, Item, Items, ButtonWrapper };
