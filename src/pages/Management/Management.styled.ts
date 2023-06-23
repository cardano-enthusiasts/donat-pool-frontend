import styled from 'styled-components';

import { h1 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  margin-bottom: 160px;
  @media (max-width: 900px) {
    margin-bottom: 56px;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  ${h1}
  margin: 80px 0 60px 0;

  @media (max-width: 900px) {
    margin: 56px 0 32px 0;
  }
  @media (max-width: 400px) {
    margin-bottom: 15px;
  }
`;

export { Wrapper, Title };
