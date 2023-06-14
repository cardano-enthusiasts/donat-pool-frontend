import { Link } from 'react-router-dom';

import { Button, GitHub } from './..';
import {
  Links,
  Wrapper,
  LinkWrapper,
  Inner,
  IconAndLinks,
} from './Footer.styled';

const Footer = () => {
  const links = [
    { title: 'Home', href: '/' },
    { title: 'About us on MetaLamp', href: '/mock-address' },
    { title: 'Terms of use', href: '/mock-address' },
    { title: 'FAQ', href: '/mock-address' },
  ];

  return (
    <Wrapper>
      <Inner>
        <IconAndLinks>
          <GitHub />
          <Links>
            {links.map(({ title, href }, index) => (
              <LinkWrapper key={title}>
                <Link to={href}>{title}</Link>
              </LinkWrapper>
            ))}
          </Links>
        </IconAndLinks>
        <Button primaryColor="red" secondaryColor="green" size="s">
          Contact us
        </Button>
      </Inner>
    </Wrapper>
  );
};

export { Footer };
