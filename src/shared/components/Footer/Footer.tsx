import { Link } from 'react-router-dom';

import {
  Column,
  Links,
  Wrapper,
  LogoAndSocials,
  Icons,
  LinkWrapper,
} from './Footer.styled';
import Logo from '../Logo/Logo';

const Footer = () => {
  const links = [
    [
      { title: 'Home', href: '/', id: 0 },
      { title: 'My profile', href: '/mock-address', id: 1 },
      { title: 'Contact us', href: '/mock-address', id: 2 },
      { title: 'About us', href: '/mock-address', id: 3 },
    ],
    [
      { title: 'Privacy Policy', href: '/mock-address', id: 4 },
      { title: 'How to use', href: '/mock-address', id: 5 },
      { title: 'Our advantages', href: '/mock-address', id: 6 },
      { title: 'Our partners', href: '/mock-address', id: 7 },
    ],
  ];

  return (
    <Wrapper>
      <LogoAndSocials>
        <Logo />
        <Icons></Icons>
      </LogoAndSocials>

      <Links>
        {links.map((column, index) => (
          <Column key={index.toString()}>
            {column.map(({ title, href, id }) => (
              <LinkWrapper key={id}>
                <Link to={href}>{title}</Link>
              </LinkWrapper>
            ))}
          </Column>
        ))}
      </Links>
    </Wrapper>
  );
};

export default Footer;
