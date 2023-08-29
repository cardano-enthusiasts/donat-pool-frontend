import cn from 'classnames';
import HTMLReactParser from 'html-react-parser';
import { Fragment } from 'react';

import { AccentButton } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { roadmapText } from '@/shared/data';

import styles from './styles.module.css';
import { Props } from './types';

function Roadmap({ active }: Props) {
  function getSubLis(item: any) {
    return item.subItems.map(({ id, title }: any) => (
      <li className="ml-[4.375rem] text-3xl max-xl:ml-[3.125rem] max-xl:text-base max-sm:ml-6" key={id}>
        {title}
      </li>
    ));
  }

  return (
    <div className="relative">
      <div
        className={`${styles.wrapper} leading-1.5 relative h-[43.75rem] w-[90%] rotate-[30deg] overflow-hidden text-4xl font-bold max-lg:left-0 max-lg:ml-0 max-sm:text-xl`}
      >
        <div className={cn('absolute top-[100%] text-yellow', { 'animate-roadmap': active })}>
          {roadmapText.phases.map(({ title, items }) => (
            <Fragment key={title}>
              <div className="font-bold text-red">{HTMLReactParser(title)}</div>
              <ul className="list-disc pl-[3.125rem]">
                {items.map((item) => (item.title ? <li key={item.id}>{item.title}</li> : getSubLis(item)))}
              </ul>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="absolute right-20 top-0 max-md:left-0  max-md:right-0 max-md:mx-auto max-md:w-[13.875rem]">
        <AccentButton
          primaryColor="blue"
          secondaryColor="green"
          size="s"
          href={ROUTES.roadmap}
          animated
          fontColor="green"
        >
          All phases
        </AccentButton>
      </div>
    </div>
  );
}

export default Roadmap;
