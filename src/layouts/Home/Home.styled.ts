import styled from 'styled-components';

import { baseContainer } from 'shared/styles/mixins';

const Wrapper = styled.div`
  ${baseContainer}
`;

const Inner = styled.div`
  display: flex;
  margin-top: 150px;
  color: #006c84;
`;

const Intro = styled.div``;

const Title = styled.h1`
  max-width: 500px;
  font-size: 70px;
  margin-bottom: 60px;
`;

const Description = styled.h2`
  max-width: 500px;
  font-size: 30px;
  line-height: 120%;
`;

const BigImg = styled.div`
  margin-left: 300px;
`;

export { Wrapper, Inner, Title, Description, Intro, BigImg };
