import styled from 'styled-components';

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
  overflow-wrap: anywhere;
  margin-top: 24px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  flex-shrink: 0;
`;

const WithdrawSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const Commission = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.red};
`;

export { LinkWrapper, ButtonWrapper, WithdrawSection, Commission };
