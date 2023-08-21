import styled from 'styled-components';

const WrapperAndButton = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: relative;
  height: 700px;
  width: 90%;
  line-height: 1.5;
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

const Inner = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 100%;
  ${({ isActive }) => isActive && 'animation: scroll 60s linear infinite;'};
  animation-delay: -5s;
  color: #fed900;
  @keyframes scroll {
    0% {
      top: 100%;
    }
    100% {
      top: -340%;
    }
  }
`;

const Title = styled.div`
  color: #ff6b95;
  font-weight: bold;
`;

const Ul = styled.ul`
  padding-left: 50px;
  list-style-type: disc;
`;

const Li = styled.li``;

const SubLi = styled.li`
  margin-left: 70px;
  list-style: none;
  font-size: 30px;
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

export { WrapperAndButton, Wrapper, Inner, Title, Ul, Li, SubLi, ButtonWrapper };
