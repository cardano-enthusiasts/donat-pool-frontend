import styled from 'styled-components';

import { h1 } from '@/shared/styles/mixins';

const Title = styled.h1`
  ${h1};
  margin-bottom: 32px;
`;

const Phases = styled.div`
  display: grid;
  gap: 32px;
`;

const Phase = styled.div`
  border-radius: 6px;
  box-shadow: 0px 15px 15px 0px rgba(186, 186, 186, 0.4);
  padding: 24px 24px 32px 24px;
`;

const PhaseTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  span {
    color: #ff6b95;
  }
`;

const ColorTitle = styled.span`
  ${h1};
  color: #29dea8;
`;

const Ul = styled.ul`
  margin: 24px 0 0 0;
  padding-left: 25px;
  font-size: 16px;
  line-height: 150%;
`;

const Li = styled.li``;

const SubLi = styled.li`
  margin-left: 25px;
`;

export { Ul, Li, SubLi, Title, ColorTitle, Phase, PhaseTitle, Phases };
