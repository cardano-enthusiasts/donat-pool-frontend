import Link from 'next/link';
import { useState } from 'react';

import { Socials, ModalContactUs, StandardButton } from '@/shared/components';

import { LINKS } from './constants';
import { Links, Wrapper, LinkWrapper, Inner, IconAndLinks } from './Footer.styled';
import type { Props } from './types';

const Footer = ({ backgroundColor = 'blue' }: Props) => {
  const [isModalContactUsOpen, setIsModalContactUsOpen] = useState(false);

  return (
    <>
      <Wrapper backgroundColor={backgroundColor}>
        <Inner>
          <IconAndLinks>
            <Socials />
            <Links>
              {LINKS.map(({ title, href, target }) => (
                <LinkWrapper key={title}>
                  <Link href={href} target={target}>
                    {title}
                  </Link>
                </LinkWrapper>
              ))}
            </Links>
          </IconAndLinks>
          <StandardButton
            primaryColor="red"
            secondaryColor="green"
            size="s"
            onClick={() => {
              setIsModalContactUsOpen(true);
            }}
            fontColor="white"
          >
            Contact us
          </StandardButton>
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
