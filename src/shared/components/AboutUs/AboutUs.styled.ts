import styled, { css } from 'styled-components';

const getPersonStyle = () => css`
  position: absolute;
  max-width: 213px;
`;

const TeamImageWrapper = styled.div`
  position: relative;
  margin-bottom: 140px;
`;
const TeamImage = styled.img``;

const Name = styled.div`
  font-family: 'Rammetto One', Arial, sans-serif;
  font-size: 32px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.red};

  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.white};
`;

const JobTitle = styled.div`
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.gray1};
`;

const Kate = styled.div`
  ${getPersonStyle()}
  left: -40px;
  bottom: 0;
`;

const Oksana = styled.div`
  ${getPersonStyle()}
  left: 237px;
  bottom: -23px;
  max-width: 213px;
`;

const Svetlana = styled.div`
  ${getPersonStyle()}
  left: 450px;
  bottom: 51px;
`;
const Olga = styled.div`
  ${getPersonStyle()}
  right: 316px;
  bottom: -92px;
`;
const Mariay = styled.div`
  ${getPersonStyle()}
  right: 69px;
  bottom: 10px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 140px;
`;
const StackTitle = styled.div`
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 40px;
`;
const Stack = styled.div`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-size: 96px;
  line-height: 94%;
`;
const StackItems = styled.div<{ color: 'red' | 'green' | 'blue' }>`
  color: ${({ theme, color }) => theme.colors[color]};
`;

export {
  TeamImageWrapper,
  TeamImage,
  Name,
  JobTitle,
  Kate,
  Oksana,
  Svetlana,
  Olga,
  Mariay,
  ButtonWrapper,
  StackTitle,
  Stack,
  StackItems,
};
