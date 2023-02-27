import styled from 'styled-components';

import { h2 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  grid-column-gap: 70px;
  align-items: flex-start;
  margin: 70px 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 30px;
    margin-top: 100px;
  }
`;

const Title = styled.h2`
  ${h2}
  margin: 0 0 30px 0;
  @media (max-width: 900px) {
    margin: 0;
  }
`;

export { Wrapper, Title };
