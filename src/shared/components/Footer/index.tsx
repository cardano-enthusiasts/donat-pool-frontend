'use client';

import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

import { Socials, ModalContactUs, StandardButton } from '@/shared/components';

import { LINKS } from './constants';
import { Props } from './types';

function Footer({ backgroundColor = 'blue' }: Props) {
  const [modalContactUsIsOpen, setModalContactUsIsOpen] = useState(false);

  function handleContactUsButtonClick() {
    setModalContactUsIsOpen(true);
  }

  function handleContactUsModalClose() {
    setModalContactUsIsOpen(false);
  }

  return (
    <>
      <footer
        className={cn('base-wrapper', {
          'bg-blue': backgroundColor === 'blue',
          'bg-black': backgroundColor === 'black',
        })}
      >
        <div className="max-w-480 flex w-full items-center justify-between pb-20 pt-10 max-lg:flex-col max-lg:gap-10">
          <div className="flex items-center gap-32 max-lg:flex-col max-lg:gap-10">
            <Socials />
            <div className=" flex gap-20 font-rammetto-one text-white max-xl:flex-col max-xl:gap-4 max-lg:items-center">
              {LINKS.map(({ title, href }) => (
                <Link className="text-[0.9375rem] leading-snug" href={href} key={title}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <StandardButton
            primaryColor="red"
            secondaryColor="green"
            size="s"
            fontColor="white"
            onClick={handleContactUsButtonClick}
          >
            Contact us
          </StandardButton>
        </div>
      </footer>
      <ModalContactUs opened={modalContactUsIsOpen} onClose={handleContactUsModalClose} />
    </>
  );
}

export default Footer;
