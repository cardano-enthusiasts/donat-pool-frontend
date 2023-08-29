'use client';

import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

import { Socials, ModalContactUs, StandardButton } from '@/shared/components';

import { LINKS } from './constants';
import type { Props } from './types';

const Footer = ({ backgroundColor = 'blue' }: Props) => {
  const [isModalContactUsOpen, setIsModalContactUsOpen] = useState(false);

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
            onClick={() => {
              setIsModalContactUsOpen(true);
            }}
          >
            Contact us
          </StandardButton>
        </div>
      </footer>
      <ModalContactUs
        isOpen={isModalContactUsOpen}
        onClose={() => {
          setIsModalContactUsOpen(false);
        }}
      />
    </>
  );
};

export default Footer;
