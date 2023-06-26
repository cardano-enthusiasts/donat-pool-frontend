import styled from 'styled-components';

const WrapperAndButton = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: relative;
  height: 700px;
  top: 0;
  width: 90%;
  font-size: 36px;
  font-weight: bold;
  text-align: justify;
  overflow: hidden;
  transform: perspective(800px) rotateX(30deg);

  @media (max-width: 1100px) {
    left: 0;
    margin-left: 0;
  }
  @media (max-width: 600px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 100%;
  animation: scroll 60s linear infinite;

  color: ${({ theme }) => theme.colors.yellow};
  @keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -350%;
    }
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
`;

const Ul = styled.ul`
  padding-left: 50px;
`;

const Li = styled.li``;

const SubLi = styled.li`
  margin-left: 100px;
  list-style: none;
  @media (max-width: 1200px) {
    margin-left: 50px;
  }
  @media (max-width: 600px) {
    margin-left: 25px;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 80px;
  @media (max-width: 900px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 222px;
  }
`;

export {
  WrapperAndButton,
  Wrapper,
  Inner,
  Title,
  Ul,
  Li,
  SubLi,
  ButtonWrapper,
};
