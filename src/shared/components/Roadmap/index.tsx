import cn from 'classnames';
import { Fragment } from 'react';

import { QuaternaryLink } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { roadmapText } from '@/shared/data';
import { isSubItem } from '@/shared/type-guards';
import type { Item, SubItem } from '@/shared/types';

import type { Props } from './types';

function Roadmap({ active }: Props) {
  function createSubItems(item: Item) {
    return item.subItems.map(({ id, title }: SubItem) => (
      <li className="ml-[4.375rem] text-3xl max-xl:ml-[3.125rem] max-xl:text-base max-sm:ml-6" key={id}>
        {title}
      </li>
    ));
  }

  return (
    <div className="relative">
      <div
        className="relative
          h-[43.75rem]
          w-[90%]
          overflow-hidden
          text-4xl/normal
          font-bold
          [transform:perspective(50rem)_rotateX(30deg)]
          max-lg:left-0
          max-lg:ml-0
          max-sm:text-xl"
      >
        <div className={cn('absolute top-[100%] text-yellow', { 'animate-roadmap': active })}>
          {roadmapText.phases.map(({ title, items }) => (
            <Fragment key={title}>
              <div className="font-bold text-red" dangerouslySetInnerHTML={{ __html: title }} />
              <ul className="list-disc pl-[3.125rem]">
                {items.map((item) => (isSubItem(item) ? <li key={item.id}>{item.title}</li> : createSubItems(item)))}
              </ul>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="absolute right-20 top-0 max-md:left-0  max-md:right-0 max-md:mx-auto max-md:w-[13.875rem]">
        <QuaternaryLink
          platformTheme="green"
          backgroundTheme="blue"
          textTheme="green"
          animation="continuous"
          href={ROUTES.donatPools}
        >
          All phases
        </QuaternaryLink>
      </div>
    </div>
  );
}

export default Roadmap;
