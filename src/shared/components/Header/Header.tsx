import Link from '@mui/material/Link';
import LinkNext from 'next/link';

import { Inner, Links, Logo, Wrapper } from './Header.styled';

const Header = () => {
  const links = [
    { title: 'Home', href: '/', id: 0 },
    { title: 'My profile', href: '/mock-address', id: 1 },
  ];

  return (
    <Wrapper>
      <Inner>
        <Logo></Logo>
        <Links>
          {links.map(({ title, href, id }) => (
            <LinkNext href={href} key={id} passHref legacyBehavior>
              <Link underline="none">{title}</Link>
            </LinkNext>
          ))}
        </Links>
      </Inner>
    </Wrapper>
  );
};

export default Header;
