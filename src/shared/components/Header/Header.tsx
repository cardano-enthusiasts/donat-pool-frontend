import Link from '@mui/material/Link';
import LinkNext from 'next/link';

import {
  Inner,
  Links,
  Wrapper,
  LinksAndWallet,
  LinkWrapper,
} from './Header.styled';
import Logo from '../Logo/Logo';
import { WalletButton } from '../WalletButton/WalletButton';

const Header = () => {
  const links = [
    { title: 'Home', href: '/', id: 0 },
    { title: 'My profile', href: '/mock-address', id: 1 },
    { title: 'About us', href: '/mock-address', id: 2 },
  ];

  return (
    <Wrapper>
      <Inner>
        <Logo />
        <LinksAndWallet>
          <Links>
            {links.map(({ title, href, id }) => (
              <LinkWrapper key={id}>
                <LinkNext href={href} passHref legacyBehavior>
                  <Link underline="none">{title}</Link>
                </LinkNext>
              </LinkWrapper>
            ))}
          </Links>
          <WalletButton />
        </LinksAndWallet>
      </Inner>
    </Wrapper>
  );
};

export default Header;
