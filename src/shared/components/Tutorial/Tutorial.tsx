import classNames from 'classnames';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import { useState } from 'react';

import { data } from './data';
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
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        isClickedTheme={isOpen}
      >
        Watch the tutorial
      </DashedButton>
      {isOpen && (
        <div className="mt-[60px]">
          {data.map(({ order, title, src, description }) => {
            return (
              <div className="mb-[86px] max-md:mb-10" key={order}>
                <div className="mb-2 text-xl font-bold text-red">{order}</div>
                <div className="mb-6 font-rammetto-one text-xl leading-[120%] text-black">{title}</div>
                <div className="flex gap-[30px] max-xl:flex-col">
                  <Image
                    className="w-full max-w-[650px] shrink-0 rounded-md border-[12px] border-yellow shadow-gif"
                    src={src}
                    alt="tutorial step"
                  />
                  <ul className={classNames(styles.description, 'm-0 list-disc pl-5')}>
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
