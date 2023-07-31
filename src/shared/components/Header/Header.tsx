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
  LinksAndButton,
  Line,
} from './Header.styled';
import { type Props } from './types';
import { Button, Logo, WalletButton } from '..';

const Header = ({ currentPage = null }: Props) => {
  const links = [
    { title: 'My projects', href: '/my-projects', id: 'my-projects' },
    { title: 'All Donation pools', href: '/all-projects', id: 'projects' },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { walletStatus } = useSelector(
    (state: AppReduxState) => state.info.data,
  );

  return (
    <>
      <Wrapper isMenuOpen={isMenuOpen}>
        <Inner isMenuOpen={isMenuOpen}>
          {!isMenuOpen && (
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          )}
          {walletStatus === 'connected' ? (
            <LinksAndButton isMenuOpen={isMenuOpen}>
              <Links>
                {links.map(({ title, href, id }) => (
                  <LinkWrapper
                    key={id}
                    {...(currentPage ? { isActive: href === currentPage } : {})}
                  >
                    <Link to={href}>{title}</Link>
                  </LinkWrapper>
                ))}
              </Links>
              <Line />
              <WalletButton />
            </LinksAndButton>
          ) : (
            <Button
              href="/new-project"
              primaryColor="yellow"
              secondaryColor="blue"
              fontColor="black"
            >
              Start a fundraiser
            </Button>
          )}
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
