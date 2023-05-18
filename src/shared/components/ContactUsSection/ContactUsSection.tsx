import { Link } from 'react-router-dom';

import {
  GitHubImg,
  GitHubLink,
  Nav,
  NavItems,
  Wrapper,
} from './ContactUsSection.styled';
import { Button } from '../Button/Button';
import { ContactUsForm } from '../ContactUsForm/ContactUsForm';

const ContactUsSection = () => {
  const navLinks = [
    { title: 'About us on MetaLamp', href: '/mock-address' },
    { title: 'Terms of use', href: '/mock-address' },
    { title: 'FAQ', href: '/mock-address' },
  ];

  return (
    <Wrapper>
      <Nav>
        <GitHubLink
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fullstack-development"
        >
          <GitHubImg src="icons/github.svg" />
        </GitHubLink>
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
