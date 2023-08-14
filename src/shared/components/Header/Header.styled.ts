import styled from 'styled-components';

import { baseContainer, baseInner, link } from '@/shared/styles/mixins';

const Wrapper = styled.header<{ isMenuOpen: boolean }>`
  ${baseContainer};
  background: #ff6b95;

  @media (max-width: 860px) {
    position: relative;
    width: 100vw;
    min-height: ${({ isMenuOpen }) => (isMenuOpen ? '100vh' : 'auto')};
    padding-top: ${({ isMenuOpen }) => isMenuOpen && '140px'};
    z-index: ${({ isMenuOpen }) => isMenuOpen && '999'};
  }
`;

const Inner = styled.div<{ isMenuOpen: boolean }>`
  ${baseInner}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 30px;
  }
  @media (max-width: 860px) {
    align-items: ${({ isMenuOpen }) => (isMenuOpen ? 'center' : 'start')};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  font-weight: bold;
  font-size: 18px;
  line-height: 133%;
  margin: 0 40px;
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinkWrapper = styled.div<{ isActive?: boolean }>`
  ${link};
  flex-shrink: 0;
  a {
    color: ${({ isActive, theme }) => (isActive ? theme.colors.yellow : theme.colors.white)};
  }
`;

const Icon = styled.img<{ isMenuOpen: boolean }>`
  display: none;
  @media (max-width: 860px) {
    display: block;
    position: absolute;
    top: 32px;
    right: 30px;
    width: 40px;
    height: 40px;
  }
  @media (max-width: 450px) {
    width: 28px;
    height: 28px;
  }
`;

const LogoWrapper = styled.div``;

const LinksAndButton = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  @media (max-width: 860px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 40px;
  }
`;

const Line = styled.div`
  background-color: #ffc5cf;
  width: 2px;
  margin-right: 40px;
  @media (max-width: 860px) {
    width: 100%;
    height: 2px;
  }
`;

export { Wrapper, Inner, Links, LinkWrapper, Icon, LogoWrapper, LinksAndButton, Line };
