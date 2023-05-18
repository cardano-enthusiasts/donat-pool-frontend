import styled from 'styled-components';

const Wrapper = styled.div``;

const DonutsWrapper = styled.div`
  position: relative;
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

const MainWrapper = styled.div<{ backgroundColor: 'green' | 'red' }>`
  padding: 0 80px 80px 400px;
  background: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]
      ? theme.colors[backgroundColor]
      : theme.colors.green};
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

const NavWrapper = styled.nav<{ windowScroll }>`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 500px;
  ${({ windowScroll }) =>
    windowScroll > 10 ? 'display: block' : 'display: none'}
`;

const RoadmapWrapper = styled.div`
  padding: 40px 80px 160px 400px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export {
  Wrapper,
  DonutsWrapper,
  TitleAndDescription,
  Title,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  ButtonWrapper,
  WavesWrapper,
  MainWrapper,
  NavWrapper,
  WhyChooseUsWrapper,
  AboutUsWrapper,
  RoadmapWrapper,
};
