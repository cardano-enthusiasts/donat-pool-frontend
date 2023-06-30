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
  transition: transform 1s ease 0s;
  transform: ${({ isActive }) =>
    isActive ? 'translateY(0%)' : 'translateY(100%)'};

  &:nth-child(2) {
    transition-delay: 250ms;
  }
  &:nth-child(3) {
    transition-delay: 500ms;
  }
`;

const DocLink = styled.a`
  display: block;
  &:not(:first-child) {
    margin-top: -30px;
    @media (max-width: 1260px) {
      margin-top: -20px;
    }
    @media (max-width: 550px) {
      margin-top: -10px;
    }
    @media (max-width: 500px) {
      margin-top: 0;
    }
  }

  &:first-child {
    @media (max-width: 1260px) {
      max-width: 50%;
    }
  }

  &:nth-child(3) {
    @media (max-width: 1260px) {
      max-width: 40%;
    }
  }
`;

const Items = styled.div``;

export { Wrapper, Title, Img, Items, DocLink };
