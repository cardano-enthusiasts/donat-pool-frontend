'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { selectConnectedWallet } from '@/redux/slices/cardano';
import { ROUTES, WALLET_NAME_TO_DATA } from '@/shared/constants';
import { useAppSelector } from '@/shared/hooks';

import { LINKS } from './constants';
import { Inner, Links, Wrapper, LinkWrapper, Icon, LogoWrapper, LinksAndButton, Line } from './Header.styled';
import { Button, Logo } from '..';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const connectedWallet = useAppSelector(selectConnectedWallet);

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <Inner isMenuOpen={isMenuOpen}>
        {!isMenuOpen && (
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        )}
        {connectedWallet ? (
          <LinksAndButton isMenuOpen={isMenuOpen}>
            <Links>
              {LINKS.map(({ title, href }) => (
                <LinkWrapper key={href} isActive={pathname === href}>
                  <Link href={href}>{title}</Link>
                </LinkWrapper>
              ))}
            </Links>
            <Line />
            <Image
              src={WALLET_NAME_TO_DATA[connectedWallet.name].logo}
              alt={`${connectedWallet.name}'s logo`}
              role="img"
            />
          </LinksAndButton>
        ) : (
          <Button href={ROUTES.newFundraising} primaryColor="yellow" secondaryColor="blue" fontColor="black">
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
  );
};

export default Header;
