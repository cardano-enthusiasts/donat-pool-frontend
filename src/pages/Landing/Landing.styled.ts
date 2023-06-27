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

const TitleAndDescription = styled.div<{ isActive: boolean }>`
  font-family: 'Rammetto One', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  padding-left: 400px;
  ${() => getLargeLayoutPadding()}
  > * {
    transition: transform 1s ease 0s;
    transform: ${({ isActive }) =>
      isActive ? 'translateY(0%)' : 'translateY(50%)'};
  }

  @media (max-width: 1100px) {
    ${() => getMediumLayoutPadding()}
    align-items: center;
    > * {
      transition: none;
    }
  }
  @media (max-width: 500px) {
    ${() => getSmallLayoutPadding()}
  }
`;

const MainLogo = styled.img`
  max-width: 770px;
  width: 100%;
  margin-bottom: 30px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 96px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.green};
  max-width: 1000px;
  width: 100%;
  margin-bottom: 40px;
  transition-delay: 200ms;
  @media (max-width: 1300px) {
    font-size: 56px;
    width: 70%;
  }
  @media (max-width: 1100px) {
    font-size: 48px;
    width: 70%;
    max-width: 510px;
  }
  @media (max-width: 610px) {
    font-size: 32px;
    width: 100%;
    max-width: 320px;
  }
`;

const DescriptionPart1 = styled.div``;
const DescriptionPart2 = styled.div`
  align-self: end;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 90px;
  transition-delay: 600ms;
  @media (max-width: 1100px) {
    margin-bottom: 48px;
  }
`;

const WavesWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const InitialLoadingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1500px;
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

const HowItWorksItemsWrapper = styled.div`
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
  TitleAndDescription,
  MainLogo,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  ButtonWrapper,
  WavesWrapper,
  MainWrapper,
  MainInner,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
  HowItWorksItemsWrapper,
  ContactUsWrapper,
};
