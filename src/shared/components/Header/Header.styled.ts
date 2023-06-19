import styled from 'styled-components';

import { baseContainer, baseInner, link } from 'shared/styles/mixins';

const Wrapper = styled.header<{ isMenuOpen: boolean }>`
  ${baseContainer};
  background: ${({ theme }) => theme.colors.red};

  @media (max-width: 700px) {
    width: 100vw;
    min-height: ${({ isMenuOpen }) => (isMenuOpen ? '100vh' : 'auto')};
    justify-content: center;
    align-items: center;
    flex-direction: ${({ isMenuOpen }) => isMenuOpen && 'column'};
  }
`;

const Inner = styled.div`
  ${baseInner}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

const Links = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  gap: 30px;
  font-weight: bold;
  font-size: 18px;
  line-height: 133%;
  margin: 0 40px;

  @media (max-width: 700px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    margin: 0 0 20px 0;
  }
`;

const LinkWrapper = styled.div<{ isActive: boolean }>`
  ${link};
  flex-shrink: 0;
  a {
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.yellow : theme.colors.white};
  }
`;

const Icon = styled.img<{ isMenuOpen: boolean }>`
  display: none;
  @media (max-width: 700px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
`;

const LogoWrapper = styled.div`
  @media (max-width: 450px) {
    opacity: 0;
  }
`;

const LinksAndButton = styled.div`
  display: flex;
`;

const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  width: 2px;
  margin-right: 40px;
`;

export {
  Wrapper,
  Inner,
  Links,
  LinkWrapper,
  Icon,
  LogoWrapper,
  LinksAndButton,
  Line,
};
