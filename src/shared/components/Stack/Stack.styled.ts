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
  color: ${({ theme }) => theme.colors.primaryGray};
`;

const Img = styled.img<{ isActive: boolean }>`
  max-width: 100%;
  transition: transform 1s ease 0s;
  transform: ${({ isActive }) =>
    isActive ? 'translateY(0%)' : 'translateY(100%)'};
  &:not(:first-child) {
    margin-top: -30px;
    @media (max-width: 850px) {
      margin-top: -20px;
    }
    @media (max-width: 850px) {
      margin-top: -10px;
    }
  }
  &:first-child {
    @media (max-width: 850px) {
      max-width: 65%;
    }
  }
  &:nth-child(2) {
    transition-delay: 250ms;
  }
  &:nth-child(3) {
    transition-delay: 500ms;
    @media (max-width: 850px) {
      max-width: 50%;
    }
  }
`;

const Items = styled.div``;

const Description = styled.div`
  font-size: 24px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const Part1 = styled.div`
  margin-bottom: 40px;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.red};
  text-decoration: underline;
`;

export { Wrapper, Title, Img, Items, Description, Part1, Link };
