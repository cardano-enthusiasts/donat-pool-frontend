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

const Img = styled.img<{ isActive: boolean }>`
  max-width: 100%;
  transform: translateY(100%);
  transition: transform 1s ease 0s;
  transform: ${({ isActive }) =>
    isActive ? 'translateY(0%)' : 'translateY(100%)'};
  &:not(:first-child) {
    margin-top: -30px;
  }
  &:nth-child(2) {
    transition-delay: 250ms;
  }
  &:nth-child(3) {
    transition-delay: 500ms;
  }
`;

const Items = styled.div``;

export { Wrapper, Title, Img, Items };
