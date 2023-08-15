import Link from 'next/link';
import { useState } from 'react';

import { useAppSelector } from '@/redux/hooks';
import { ROUTES } from '@/shared/constants';

import { Inner, Links, Wrapper, LinkWrapper, Icon, LogoWrapper, LinksAndButton, Line } from './Header.styled';
import type { Props } from './types';
import { Logo, StandardButton, WalletButton } from '..';

const Header = ({ currentPage = null }: Props) => {
  const links = [
    { title: 'My projects', href: ROUTES.userFundraisings, id: 'my-projects' },
    {
      title: 'All Donation pools',
      href: ROUTES.allFundraisings,
      id: 'projects',
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const connectWalletStatus = useAppSelector((state) => state.connectWallet.requestStatus);

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <Inner isMenuOpen={isMenuOpen}>
        {!isMenuOpen && (
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        )}
        {connectWalletStatus === 'success' ? (
          <LinksAndButton isMenuOpen={isMenuOpen}>
            <Links>
              {links.map(({ title, href, id }) => (
                <LinkWrapper key={id} {...(currentPage ? { isActive: href === currentPage } : {})}>
                  <Link href={href}>{title}</Link>
                </LinkWrapper>
              ))}
            </Links>
            <Line />
            <WalletButton />
          </LinksAndButton>
        ) : (
          <StandardButton href={ROUTES.newFundraising} primaryColor="yellow" secondaryColor="blue" fontColor="black">
            Start a fundraiser
          </StandardButton>
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

export { Header };
