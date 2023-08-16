import classNames from 'classnames';
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
        className={classNames('base-wrapper', {
          'bg-blue': backgroundColor === 'blue',
          'bg-black': backgroundColor === 'black',
        })}
      >
        <div className="base-inner flex w-full items-center justify-between pb-20 pt-10 max-md:flex-col max-md:gap-10">
          <div className="flex items-center gap-32 max-md:flex-col max-md:gap-10">
            <Socials />
            <div className=" flex gap-20 font-rammetto-one text-white max-lg:flex-col max-lg:gap-4 max-sm:items-center">
              {LINKS.map(({ title, href, target }) => (
                <Link href={href} target={target} key={title} className="text-[15px] leading-snug">
                  {title}
                </Link>
              ))}
            </div>
          </div>
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

export { Footer };
