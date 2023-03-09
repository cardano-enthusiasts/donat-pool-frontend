import styled from 'styled-components';

import { h2 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  margin: 70px 0;
`;

const Title = styled.h2`
  ${h2}
  margin: 0 0 30px 0;
  @media (max-width: 900px) {
    margin-bottom: 15px;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  gap: 40px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export { Wrapper, Title, CardsWrapper };
