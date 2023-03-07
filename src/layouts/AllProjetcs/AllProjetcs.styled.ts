import styled from 'styled-components';

import { h2 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  margin: 70px 0;
`;

const Title = styled.h2`
  ${h2}
  margin: 0 0 30px 0;
  @media (max-width: 900px) {
    margin: 0;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

export { Wrapper, Title, CardsWrapper };
