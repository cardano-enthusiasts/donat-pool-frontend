import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 60px;
  @media (max-width: 1360px) {
    gap: 30px;
    margin-bottom: 30px;
  }
`;

const Item = styled.div`
  height: 66px;
  cursor: default;
  &:hover {
    > div:first-child {
      transform: rotateX(90deg) translateZ(33px);
    }
    > div:last-child {
      transform: rotateX(0) translateZ(10px) translateY(-66px);
    }
  }
  @media (max-width: 730px) {
    height: auto;
    &:hover {
      > div:first-child {
        transform: none;
      }
      > div:last-child {
        transform: none;
      }
    }
  }
`;

const Main = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 130%;
  color: #141414;
  transition: transform 0.5s linear;
  transition-delay: 0.1s;
  height: 66px;
  @media (max-width: 1360px) {
    font-size: 34px;
  }
  @media (max-width: 730px) {
    transition: none;
    height: auto;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Secondary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotateX(-90deg) translateZ(-40px);
  height: 66px;
  transition: transform 0.5s linear;
  transition-delay: 0.1s;
  padding: 0 40px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background-color: #ff6b95;
  @media (max-width: 1200px) {
    padding: 0 20px;
  }
  @media (max-width: 730px) {
    transform: none;
    background-color: transparent;
    padding: 0;
    height: auto;
    color: #141414;
  }
`;

const Tertiary = styled.div`
  color: #fed900;
  font-size: 16px;
  font-weight: normal;
  @media (max-width: 730px) {
    color: #141414;
  }
`;

export { Wrapper, Item, Main, Secondary, Tertiary };
