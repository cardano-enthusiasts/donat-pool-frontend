import cn from 'classnames';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import { useState } from 'react';

import { DATA } from './data';
import styles from './Tutorial.module.css';
import { DashedButton } from '..';

const Tutorial = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div id="tutorial">
      <DashedButton
        primaryColor="blue"
        secondaryColor="red"
        backgroundColor="green"
        isClickedTheme={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Watch the tutorial
      </DashedButton>
      {isOpen && (
        <div className="mt-[3.75rem]">
          {DATA.map(({ order, title, src, description }) => {
            return (
              <div className="mb-[5.375rem] max-md:mb-10" key={order}>
                <div className="mb-2 text-xl font-bold text-red">{order}</div>
                <div className="mb-6 font-rammetto-one text-xl leading-[120%] text-black">{title}</div>
                <div className="flex gap-[1.875rem] max-2xl:flex-col">
                  <Image
                    className="w-full max-w-[40.625rem] shrink-0 rounded-md border-[0.75rem] border-yellow shadow-gif"
                    src={src}
                    alt="tutorial step"
                  />
                  <ul className={cn(styles.description, 'm-0 list-disc pl-5')}>
                    {description.map((item, index) => (
                      <li className="mb-2.5 text-sm" key={index}>
                        {HTMLReactParser(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export { Tutorial };
