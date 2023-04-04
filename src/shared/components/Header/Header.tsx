import { useState } from 'react';
import { Link } from 'react-router-dom';

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
import { Logo, WalletButton } from '..';

const Header = () => {
  const links = [
    { title: 'Home', href: '/', id: 'home' },
    { title: 'Management', href: '/management', id: 'management' },
    { title: 'My profile', href: '/my-profile', id: 'profile' },
    { title: 'Projects', href: '/all-projects', id: 'all-projects' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Wrapper isMenuOpen={isMenuOpen}>
        <Inner>
          <Logo />
          <LinksAndWallet>
            <Links>
              {links.map(({ title, href, id }) => (
                <LinkWrapper key={id}>
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
