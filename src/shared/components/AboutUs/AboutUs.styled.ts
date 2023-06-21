import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 140px;
  @media (max-width: 1100px) {
    margin-bottom: 80px;
  }
`;
const TeamWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamInner = styled.div`
  display: flex;
  position: relative;
  margin-top: 60px;
  margin-bottom: 140px;
  height: 600px;
  width: 100%;
  max-width: 1090px;
  @media (max-width: 1430px) {
    height: 1200px;
    max-width: 812px;
  }
  @media (max-width: 1200px) {
    max-width: 624px;
    height: 1000px;
  }
  @media (max-width: 1100px) {
    margin-top: 30px;
    margin-bottom: 50px;
  }
  @media (max-width: 700px) {
    max-width: 403px;
    height: 700px;
  }
`;

const photoStyles = css`
  position: absolute;
  flex-shrink: 0;
  height: auto;
`;

const KatePhoto = styled.img`
  ${photoStyles};
  width: 350px;
  z-index: 2;
  top: 82px;
  left: -8%;
  @media (max-width: 1430px) {
    left: 0;
  }
  @media (max-width: 1200px) {
    width: 263px;
    top: 91px;
  }
  @media (max-width: 700px) {
    width: 175px;
  }
`;
const OksanaPhoto = styled.img`
  ${photoStyles}
  width: 420px;
  top: -22px;
  left: 8%;
  z-index: 1;
  @media (max-width: 1430px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 1200px) {
    width: 315px;
    top: 13px;
  }
  @media (max-width: 700px) {
    width: 210px;
  }
`;
const OlgaPhoto = styled.img`
  ${photoStyles};
  width: 370px;
  left: 26%;
  top: 111px;
  z-index: 1;
  @media (max-width: 1430px) {
    right: 0;
    left: auto;
  }
  @media (max-width: 1200px) {
    width: 278px;
  }
  @media (max-width: 700px) {
    width: 185px;
  }
`;

const SvetlanaAndMariya = styled.div`
  position: relative;
  width: 100%;
  max-width: 630px;
  height: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    max-width: 470px;
    height: 1000px;
  }
  @media (max-width: 700px) {
    height: 700px;
    max-width: 315px;
  }
`;

const SvetlanaPhoto = styled.img`
  ${photoStyles};
  width: 350px;
  left: 50%;
  top: 129px;
  z-index: 3;
  @media (max-width: 1430px) {
    bottom: 0;
    top: auto;
    left: 0;
  }
  @media (max-width: 1200px) {
    width: 263px;
  }
  @media (max-width: 700px) {
    width: 175px;
  }
`;
const MariayPhoto = styled.img`
  ${photoStyles};
  width: 400px;
  right: -8%;
  z-index: 1;
  @media (max-width: 1430px) {
    bottom: 48px;
    right: 0;
  }
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 700px) {
    width: 200px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 140px;
  align-self: start;
  @media (max-width: 1100px) {
    justify-content: center;
    margin-bottom: 50px;
  }
`;

const StackWrapper = styled.div`
  margin-bottom: 40px;
`;

const WhiteDots = styled.div`
  position: absolute;
  right: -50px;
  bottom: -25%;
  background-image: url('/img/white-dots.svg');
  background-repeat: no-repeat;
  height: 500px;
  width: 1330px;
  @media (max-width: 1430px) {
    display: none;
  }
`;

export {
  Wrapper,
  TeamWrapper,
  TeamInner,
  ButtonWrapper,
  KatePhoto,
  OksanaPhoto,
  OlgaPhoto,
  SvetlanaPhoto,
  SvetlanaAndMariya,
  MariayPhoto,
  WhiteDots,
  StackWrapper,
};
