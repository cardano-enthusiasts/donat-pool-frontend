import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Img = styled.img`
  max-width: 100%;
  &:not(:first-child) {
    margin-top: -30px;
  }
`;

const Items = styled.div``;

export { Wrapper, Title, Img, Items };
