import styled from 'styled-components';

import {
  getLargeLayoutPadding,
  getMediumLayoutPadding,
  getSmallLayoutPadding,
} from 'shared/styles/mixins';

const Wrapper = styled.div``;

const DonutsWrapper = styled.div`
  position: relative;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleAndDescriptionWrapper = styled.div`
  padding-left: 400px;
  ${() => getLargeLayoutPadding()}

  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const WavesWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const InitialLoadingWrapper = styled.div<{
  isAnimationActive: boolean;
  windowScroll: number;
}>`
  position: relative;
  width: 100%;
  height: ${({ windowScroll, isAnimationActive }) =>
    windowScroll < 535 && isAnimationActive ? 1500 - windowScroll : 965}px;
  background: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: hidden;
  @media (max-width: 1100px) {
    height: auto;
  }
`;

const MainWrapper = styled.div<{
  backgroundColor: 'green' | 'red' | 'black' | 'yellow' | 'blue';
}>`
  width: 100%;
  background: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]
      ? theme.colors[backgroundColor]
      : theme.colors.green};
`;

const MainInner = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const HowItWorksWrapper = styled.div`
  padding-left: 400px;
  padding-bottom: 80px;
  ${() => getLargeLayoutPadding()}
  @media (max-width: 1100px) {
    padding-bottom: 60px;
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const WhyChooseUsWrapper = styled.div`
  ${() => getLargeLayoutPadding()}
  padding-left: 400px;
  padding-top: 0;
  padding-bottom: 160px;
  background-image: url('img/section-cat.svg');
  background-position: 0 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const AboutUsWrapper = styled.div`
  ${() => getLargeLayoutPadding()}
  padding-left: 400px;
  padding-top: 0;
  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
    padding-top: 50px;
  }
`;

const RoadmapWrapper = styled.div`
  ${() => getLargeLayoutPadding()}
  padding-left: 400px;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.colors.black};
  user-select: none;

  overflow: hidden;
  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const ContactUsWrapper = styled.div``;

export {
  InitialLoadingWrapper,
  Wrapper,
  DonutsWrapper,
  Inner,
  TitleAndDescriptionWrapper,
  WavesWrapper,
  MainWrapper,
  MainInner,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
  HowItWorksWrapper,
  ContactUsWrapper,
};
