import styled from 'styled-components';

const Wrapper = styled.div``;

const TitleAndDescription = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif, sans-serif;
  font-size: 180px;
  line-height: 111%;
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 10px;

  -webkit-text-stroke: 10px ${({ theme }) => theme.colors.yellow};
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Rammetto One', Arial, sans-serif;
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

export {
  Wrapper,
  TitleAndDescription,
  Title,
  Description,
  DescriptionPart1,
  DescriptionPart2,
};
