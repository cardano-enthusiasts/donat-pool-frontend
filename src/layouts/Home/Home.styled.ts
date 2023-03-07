import styled from 'styled-components';

import { h1, h2 } from 'shared/styles/mixins';

const Wrapper = styled.div``;

const MainScreen = styled.div`
  display: flex;
  min-height: 60vh;
  margin-top: 150px;
`;

const Intro = styled.div``;

const Title = styled.h1`
  ${h1};
  max-width: 500px;
  margin-bottom: 30px;
`;

const Description = styled.h2`
  ${h2};
  margin: 0 0 40px 0;
  max-width: 500px;
  line-height: 120%;
`;

const MainButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 30px;
`;

const IntroInner = styled.div``;

export {
  Wrapper,
  Title,
  Description,
  Intro,
  MainButtons,
  IntroInner,
  MainScreen,
};
