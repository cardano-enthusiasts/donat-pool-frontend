import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 48px;
  line-height: 154%;
  margin: 0 0 24px;

  @media (max-width: 1100px) {
    font-size: 32px;
    line-height: 110%;
  }
`;

const Description = styled.div`
  font-size: 24px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 40px;
`;

const ButtonAndInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: start;
  }
`;

const ButtonWrapper = styled.div`
  flex-shrink: 0;
`;

const MinorDescription = styled.div`
  font-size: 16px;
  line-height: 130%;
`;

const MinorInfoSection = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export {
  Wrapper,
  Title,
  Description,
  InfoSection,
  ButtonAndInfo,
  MinorDescription,
  MinorInfoSection,
  ButtonWrapper,
};
