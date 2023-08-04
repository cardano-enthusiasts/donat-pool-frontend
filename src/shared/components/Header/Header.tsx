import Link from 'next/link';
import { useState } from 'react';

import { useAppSelector } from 'store/hooks';

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
  const walletMode = useAppSelector((state) => state.wallet.mode);

  return (
    <>
      <Wrapper isMenuOpen={isMenuOpen}>
        <Inner isMenuOpen={isMenuOpen}>
          {!isMenuOpen && (
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          )}
          {walletMode === 'connected' ? (
            <LinksAndButton isMenuOpen={isMenuOpen}>
              <Links>
                {links.map(({ title, href, id }) => (
                  <LinkWrapper
                    key={id}
                    {...(currentPage ? { isActive: href === currentPage } : {})}
                  >
                    <Link href={href}>{title}</Link>
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
