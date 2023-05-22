import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (max-width: 1100px) {
    gap: 30px;
  }
`;

const Item = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 600px) {
    font-size: 32px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export { Wrapper, Item };
