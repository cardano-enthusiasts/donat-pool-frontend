import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 160px;
`;

const Title = styled.h1`
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 54px;
  line-height: 104%;
  text-align: center;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 24px;
  @media (max-width: 800px) {
    font-size: 36px;
  }
`;

const Duration = styled.div`
  padding: 24px 0;
  border-top: 2px solid ${({ theme }) => theme.colors.black};
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const Sum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-family: 'Rammetto One', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 54px;
  line-height: 104%;
  padding: 24px 0 40px;
  @media (max-width: 500px) {
    font-size: 36px;
  }
`;

const Img = styled.img`
  @media (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const Raised = styled.div`
  color: ${({ theme }) => theme.colors.red};
`;
const Line = styled.div`
  height: 48px;
  width: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.red};
`;
const Goal = styled.div`
  color: ${({ theme }) => theme.colors.yellow};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  Wrapper,
  Title,
  Duration,
  Sum,
  Img,
  Raised,
  Line,
  Goal,
  ButtonWrapper,
};
