import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, GitHub, ModalContactUs } from './..';
import {
  Links,
  Wrapper,
  LinkWrapper,
  Inner,
  IconAndLinks,
} from './Footer.styled';
import { type Props } from './types';

const Footer = ({ backgroundColor = 'blue' }: Props) => {
  const links = [
    { title: 'Home', href: '/' },
    { title: 'About us on MetaLamp', href: '/mock-address' },
    { title: 'Terms of use', href: '/mock-address' },
    { title: 'FAQ', href: '/mock-address' },
  ];
  const [isModalContactUsOpen, setIsModalContactUsOpen] = useState(false);

  return (
    <>
      <Wrapper backgroundColor={backgroundColor}>
        <Inner>
          <IconAndLinks>
            <GitHub />
            <Links>
              {links.map(({ title, href }) => (
                <LinkWrapper key={title}>
                  <Link to={href}>{title}</Link>
                </LinkWrapper>
              ))}
            </Links>
          </IconAndLinks>
          <Button
            primaryColor="red"
            secondaryColor="green"
            size="s"
            onClick={() => {
              setIsModalContactUsOpen(true);
            }}
          >
            Contact us
          </Button>
        </Inner>
      </Wrapper>
      <ModalContactUs
        isOpen={isModalContactUsOpen}
        onClose={() => {
          setIsModalContactUsOpen(false);
        }}
      />
    </>
  );
};

export { Footer };
