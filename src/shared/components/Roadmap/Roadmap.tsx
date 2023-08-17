import classNames from 'classnames';
import HTMLReactParser from 'html-react-parser';
import { Fragment } from 'react';

import { ROUTES } from '@/shared/constants';
import { roadmapText } from '@/shared/data';

import styles from './Roadmap.module.css';
import type { Props } from './types';
import { AccentButton } from '../.';

const Roadmap = ({ isActive }: Props) => {
  const getSubLis = (item: any) => {
    return item.subItems.map(({ id, title }: any) => (
      <li className="ml-[70px] text-3xl max-xl:ml-[50px] max-sm:ml-6" key={id}>
        {title}
      </li>
    ));
  };

  return (
    <div className="relative">
      <div
        className={classNames(
          'text-bold relative h-[700px] w-[90%] rotate-[30deg] overflow-hidden text-4xl max-lg:left-0 max-lg:ml-0 max-sm:text-xl',
          styles.wrapper,
        )}
      >
        <div className={classNames('absolute top-[100%] text-yellow', { 'animate-roadmap': isActive })}>
          {roadmapText.phases.map(({ title, items }) => (
            <Fragment key={title}>
              <div className={classNames('font-bold text-red')}>{HTMLReactParser(title)}</div>
              <ul className="list-disc pl-[50px]">
                {items.map((item) => {
                  return item.title ? <li key={item.id}>{item.title}</li> : getSubLis(item);
                })}
              </ul>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="absolute right-20 top-0 max-md:left-0  max-md:right-0 max-md:mx-auto max-md:w-[222px]">
        <AccentButton
          primaryColor="blue"
          secondaryColor="green"
          size="s"
          href={ROUTES.roadmap}
          isAnimation={true}
          fontColor="green"
        >
          All phases
        </AccentButton>
      </div>
    </div>
  );
};

export { Roadmap };
