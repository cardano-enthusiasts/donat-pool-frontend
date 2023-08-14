import styled, { css } from 'styled-components';

import { getLargeLayoutPadding, getMediumLayoutPadding, getSmallLayoutPadding } from '@/shared/styles/mixins';

const paddings = css`
  ${() => getLargeLayoutPadding()}
  padding-left: 400px;

  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const TitleAndDescriptionWrapper = styled.div`
  ${paddings}
`;

const MainWrapper = styled.div<{
  backgroundColor: 'green' | 'red' | 'black' | 'yellow' | 'blue';
}>`
  width: 100%;
  background: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor] ? theme.colors[backgroundColor] : theme.colors.green};
`;

const MainInner = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const HowItWorksWrapper = styled.div`
  padding-bottom: 80px;
  ${paddings}
  @media (max-width: 1100px) {
    padding-bottom: 60px;
  }
`;

const WhyChooseUsWrapper = styled.div`
  ${paddings}
  padding-top: 0;
  padding-bottom: 160px;
  background-image: url('img/section-cat.svg');
  background-position: 0 100%;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const AboutUsWrapper = styled.div`
  ${paddings}
  padding-top: 0;
  @media (max-width: 500px) {
    padding-top: 50px;
  }
`;

const RoadmapWrapper = styled.div`
  ${paddings}
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.colors.black};
  user-select: none;

  overflow: hidden;
`;

export {
  MainWrapper,
  MainInner,
  HowItWorksWrapper,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
  TitleAndDescriptionWrapper,
};
