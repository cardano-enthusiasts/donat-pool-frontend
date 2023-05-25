import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { type AppReduxState } from 'shared/types';

import {
  Inner,
  Links,
  Wrapper,
  LinkWrapper,
  Icon,
  LogoWrapper,
} from './Header.styled';
import { type Props } from './types';
import { Logo } from '..';

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
          {!isMenuOpen && (
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          )}
          <Links isMenuOpen={isMenuOpen}>
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
        </Inner>

        <Icon
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          isMenuOpen={isMenuOpen}
          src={`icons/${isMenuOpen ? 'close' : 'menu'}.svg`}
          alt="close icon"
        />
      </Wrapper>
    </>
  );
};

export { Header };
