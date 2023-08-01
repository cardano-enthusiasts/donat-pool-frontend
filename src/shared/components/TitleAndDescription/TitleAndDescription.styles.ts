import styled from 'styled-components';

const Wrapper = styled.div<{ isActive: boolean }>`
  font-family: 'Rammetto One', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  > * {
    transition: transform 1s ease 0s;
    transform: ${({ isActive }) =>
      isActive ? 'translateY(0%)' : 'translateY(50%)'};
  }
  @media (max-width: 1100px) {
    align-items: center;
    > * {
      transition: none;
      transform: translateY(0%);
    }
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
  color: #29dea8;
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

export {
  Wrapper,
  MainLogo,
  Description,
  DescriptionPart1,
  DescriptionPart2,
  ButtonWrapper,
};
