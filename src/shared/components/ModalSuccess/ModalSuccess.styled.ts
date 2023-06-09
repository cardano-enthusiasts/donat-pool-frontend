import styled from 'styled-components';

import { h1 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  ${h1};
  margin-bottom: 24px;
  text-align: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  margin-bottom: 40px;
`;

const Description = styled.div`
  margin-bottom: 24px;
`;

export { Wrapper, Title, Inner, Description, Img };
