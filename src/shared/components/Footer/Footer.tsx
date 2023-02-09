import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkUI from '@mui/material/Link';
import { Link } from 'react-router-dom';

import { Column, Links, Wrapper, LogoAndSocials, Icons } from './Footer.styled';
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
        <Icons>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon color="primary" fontSize="large" />
          </a>
          <a
            href="https://web.telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon color="primary" fontSize="large" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon color="primary" fontSize="large" />
          </a>
        </Icons>
      </LogoAndSocials>

      <Links>
        {links.map((column, index) => (
          <Column key={index.toString()}>
            {column.map(({ title, href, id }) => (
              <LinkUI component={Link} to={href} key={id} underline="none">
                {title}
              </LinkUI>
            ))}
          </Column>
        ))}
      </Links>
    </Wrapper>
  );
};

export default Footer;
