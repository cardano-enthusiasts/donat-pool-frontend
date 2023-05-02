import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { type AppReduxState } from 'shared/types';

import {
  Inner,
  Links,
  Wrapper,
  LinksAndWallet,
  LinkWrapper,
  Menu,
  MenuLine,
  CloseButton,
} from './Header.styled';
import { type Props } from './types';
import { Logo, WalletButton } from '..';

const Header = ({ currentPage }: Props) => {
  const { isManager } = useSelector(
    (state: AppReduxState) => state.info.data.user
  );
  const managerLink = {
    title: 'Management',
    href: '/management',
    id: 'management',
  };
  const links = [
    { title: 'Home', href: '/', id: 'home' },
    { title: 'My profile', href: '/my-profile', id: 'profile' },
    { title: 'Projects', href: '/all-projects', id: 'projects' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Wrapper isMenuOpen={isMenuOpen}>
        <Inner>
          <Logo />
          <LinksAndWallet>
            <Links>
              {isManager && (
                <LinkWrapper
                  key={managerLink.id}
                  isActive={managerLink.href === currentPage}
                >
                  <Link to={managerLink.href}>{managerLink.title}</Link>
                </LinkWrapper>
              )}
              {links.map(({ title, href, id }) => (
                <LinkWrapper key={id} isActive={href === currentPage}>
                  <Link to={href}>{title}</Link>
                </LinkWrapper>
              ))}
            </Links>
            <WalletButton />
          </LinksAndWallet>
        </Inner>

        <CloseButton
          onClick={() => {
            setIsMenuOpen(false);
          }}
          isMenuOpen={isMenuOpen}
        >
          <img src="icons/close.svg" alt="close icon"></img>
        </CloseButton>
      </Wrapper>
      <Menu
        onClick={() => {
          setIsMenuOpen(true);
        }}
        isMenuOpen={isMenuOpen}
      >
        <MenuLine />
        <MenuLine />
        <MenuLine />
      </Menu>
    </>
  );
};

export { Header };
