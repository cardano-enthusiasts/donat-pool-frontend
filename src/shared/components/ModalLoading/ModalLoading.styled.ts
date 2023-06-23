import styled from 'styled-components';

import { h1 } from 'shared/styles/mixins';

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  ${h1};
  font-size: 36px;
  margin-bottom: 24px;
`;

const Img = styled.img`
  max-width: 140px;
  margin-bottom: 40px;
`;

const Description = styled.div`
  text-align: center;
`;

export { Inner, Title, Img, Description };
