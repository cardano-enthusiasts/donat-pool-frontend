import styled from 'styled-components';

import { h1 } from '@/shared/styles/mixins';

const Wrapper = styled.div`
  display: grid;
  gap: 32px;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  ${h1};
  margin-bottom: 32px;
`;

const ColorTitle = styled.span`
  ${h1};
  color: #29dea8;
`;

const Ul = styled.ul`
  padding-left: 20px;
  margin: 0;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const Alert = styled.div`
  padding: 20px 40px;
  background: #ffc5cf;

  a {
    color: #4757e6;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

const SubSection = styled.div``;

const Subtitle = styled.h3`
  color: #5c5f60;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 12px 0;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #dfdfdf;
`;

export {
  Wrapper,
  SectionWrapper,
  Title,
  ColorTitle,
  Ul,
  Li,
  Alert,
  SubSection,
  Subtitle,
  Line,
};
