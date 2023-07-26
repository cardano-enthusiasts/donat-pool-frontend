import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import { Button, Socials, ModalContactUs } from './..';
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
    { title: 'FAQ', href: '/faq' },
  ];
  const [isModalContactUsOpen, setIsModalContactUsOpen] = useState(false);

  return (
    <>
      <Wrapper backgroundColor={backgroundColor}>
        <Inner>
          <IconAndLinks>
            <Socials />
            <Links>
              {links.map(({ title, href }) => {
                console.log(`${href}#top`);

                return (
                  <LinkWrapper key={title}>
                    <HashLink to={`${href}${href !== '/' ? '#top' : ''}`}>
                      {title}
                    </HashLink>
                  </LinkWrapper>
                );
              })}
            </Links>
          </IconAndLinks>
          <Button
            primaryColor="red"
            secondaryColor="green"
            size="s"
            onClick={() => {
              setIsModalContactUsOpen(true);
            }}
            fontColor="white"
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
