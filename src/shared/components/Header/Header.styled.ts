import styled, { css } from 'styled-components';

import { baseContainer, baseInner, link } from 'shared/styles/mixins';

const Wrapper = styled.header<{ isMenuOpen: boolean }>`
  ${baseContainer};
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  @media (max-width: 700px) {
    position: absolute;
    z-index: 100;
    width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.white};
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
  }
`;

const line = css`
  height: 5px;
  width: 30px;
  margin: 5px 0;
  background: ${({ theme }) => theme.colors.dark50};
`;

const Inner = styled.div`
  ${baseInner}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  font-size: 18px;
  margin: 0 40px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin: 0 0 20px 0;
  }
`;

const LinksAndWallet = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const LinkWrapper = styled.div<{ isActive: boolean }>`
  ${link};
  flex-shrink: 0;
  a {
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  }
`;

const Menu = styled.div<{ isMenuOpen: boolean }>`
  display: none;
  cursor: pointer;
  @media (max-width: 700px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'block')};
    position: absolute;
    top: 25px;
    right: 27px;
  }
`;

const MenuLine = styled.div`
  ${line}
`;
const CloseButton = styled.div<{ isMenuOpen: boolean }>`
  display: none;
  @media (max-width: 700px) {
    position: absolute;
    top: 30px;
    right: 30px;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
  }
`;

export {
  Wrapper,
  Inner,
  Links,
  LinksAndWallet,
  LinkWrapper,
  Menu,
  MenuLine,
  CloseButton,
};
