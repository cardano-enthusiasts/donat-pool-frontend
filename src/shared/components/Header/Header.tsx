import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Inner,
  Links,
  Wrapper,
  LinkWrapper,
  Icon,
  LogoWrapper,
  LinksAndButton,
  Line,
} from './Header.styled';
import { type Props } from './types';
import { Logo, WalletButton } from '..';

const Header = ({ currentPage }: Props) => {
  const links = [
    { title: 'My projects', href: '/my-projects', id: 'my-projects' },
    { title: 'All Donation pools', href: '/all-projects', id: 'projects' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Wrapper isMenuOpen={isMenuOpen}>
        <Inner isMenuOpen={isMenuOpen}>
          {!isMenuOpen && (
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          )}
          <LinksAndButton isMenuOpen={isMenuOpen}>
            <Links>
              {links.map(({ title, href, id }) => (
                <LinkWrapper key={id} isActive={href === currentPage}>
                  <Link to={href}>{title}</Link>
                </LinkWrapper>
              ))}
            </Links>
            <Line />
            <WalletButton />
          </LinksAndButton>
        </Inner>

        <Icon
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          isMenuOpen={isMenuOpen}
          src={`/icons/${isMenuOpen ? 'close' : 'menu'}.svg`}
          alt="close icon"
        />
      </Wrapper>
    </>
  );
};

export { Header };
