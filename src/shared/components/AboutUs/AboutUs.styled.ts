import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 140px;
  @media (max-width: 1100px) {
    margin-bottom: 80px;
  }
`;

const TeamImageWrapper = styled.div`
  position: relative;
  margin-bottom: 140px;
  @media (max-width: 1100px) {
    margin-bottom: 50px;
  }
`;
const TeamImage = styled.img`
  width: 100%;
  max-width: 1070px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 140px;
  @media (max-width: 1100px) {
    margin-bottom: 50px;
  }
`;

const StackTitle = styled.div`
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 50px;
`;

const Stack = styled.div`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-size: 96px;
  line-height: 50%;
  margin-bottom: 40px;
  @media (max-width: 800px) {
    font-size: 48px;
    line-height: 90%;
  }
  @media (max-width: 470px) {
    font-size: 32px;
  }
`;

const StackItems = styled.div<{
  color: 'red' | 'green' | 'blue';
  'data-title';
}>`
  color: ${({ theme, color }) => theme.colors[color]};
  /* text-shadow: -6px -4px #ffffff80; */
  position: relative;

  &:before,
  &:after {
    content: attr(data-title);
    color: rgba(255, 255, 255, 0.1);
    position: absolute;
  }
  &:before {
    top: 1px;
    left: 1px;
  }
  &:after {
    top: 2px;
    left: 2px;
  }
`;

export {
  Wrapper,
  TeamImageWrapper,
  TeamImage,
  ButtonWrapper,
  StackTitle,
  Stack,
  StackItems,
};
