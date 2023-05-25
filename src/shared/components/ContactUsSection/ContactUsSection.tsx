import { Link } from 'react-router-dom';

import { Button, GitHub, ContactUsForm } from './..';
import {
  GitHubWrapper,
  Nav,
  NavItems,
  Wrapper,
} from './ContactUsSection.styled';

const ContactUsSection = () => {
  const navLinks = [
    { title: 'About us on MetaLamp', href: '/mock-address' },
    { title: 'Terms of use', href: '/mock-address' },
    { title: 'FAQ', href: '/mock-address' },
  ];

  return (
    <Wrapper>
      <Nav>
        <GitHubWrapper>
          <GitHub />
        </GitHubWrapper>

        <NavItems>
          {navLinks.map(({ title, href }) => (
            <li key={title}>
              <Link to={href}>{title}</Link>
            </li>
          ))}
        </NavItems>
        <Button primaryColor="red" secondaryColor="green">
          Create an account
        </Button>
      </Nav>
      <ContactUsForm />
    </Wrapper>
  );
};

export { ContactUsSection };
