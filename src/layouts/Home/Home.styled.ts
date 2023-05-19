import styled from 'styled-components';

const Wrapper = styled.div``;

const DonutsWrapper = styled.div`
  position: relative;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleAndDescription = styled.div`
  font-family: 'Rammetto One', Arial, sans-serif;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 180px;
  line-height: 111%;
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 10px;

  -webkit-text-stroke: 10px ${({ theme }) => theme.colors.yellow};
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
`;

const DescriptionPart1 = styled.div``;
const DescriptionPart2 = styled.div`
  align-self: end;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 90px;
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
  padding: 0 80px 80px 400px;
`;

const WhyChooseUsWrapper = styled.div`
  padding: 0 80px 160px 400px;
  background-image: url('img/section-cat.svg');
  background-position: 0 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.red};
`;

const AboutUsWrapper = styled.div`
  padding: 0 80px 160px 400px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const NavWrapper = styled.nav<{ windowScroll; windowWidth }>`
  position: fixed;
  left: ${({ windowWidth }) => (windowWidth - 1920) / 2 + 90}px;
  top: 90px;
  z-index: 2;

  ${({ windowScroll }) =>
    windowScroll > 10 ? 'display: block' : 'display: none'};

  @media (max-width: 1920px) {
    left: 90px;
  }
`;

const RoadmapWrapper = styled.div`
  padding: 40px 80px 0 400px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export {
  InitialLoadingWrapper,
  Wrapper,
  DonutsWrapper,
  Inner,
  TitleAndDescription,
  Title,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  ButtonWrapper,
  WavesWrapper,
  MainWrapper,
  MainInner,
  NavWrapper,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
  HowItWorksItemsWrapper,
};
