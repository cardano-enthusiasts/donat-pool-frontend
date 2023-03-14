import styled from 'styled-components';

import { h2, h3 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.div`
  ${h2};
  font-size: 24px;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 700px) {
    text-align: center;
  }
`;

const Item = styled.div`
  ${h3};
  font-size: 16px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    gap: 15px;
  }
`;

const ButtonWrapper = styled.div`
  max-width: 200px;
  @media (max-width: 700px) {
    margin: 0 auto;
  }
`;

export { Wrapper, Title, Item, Items, ButtonWrapper };
