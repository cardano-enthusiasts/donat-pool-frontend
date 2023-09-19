import cn from 'classnames';
import Link from 'next/link';

import { convertLovelaceToADA, formatDate } from '@/shared/helpers';
import AdaIcon from '@public/icons/ada.svg';

import type { Props } from './types';

function ProjectCard({
  data: { deadline, title, goal, raisedAmt, threadTokenCurrency },
  linkSection,
  status = 'default',
  paddingSize = 'm',
}: Props) {
  const statusTitles = {
    active: 'Active',
    completed: 'Completed',
  };

  return (
    <Link
      className={cn(
        `cursor-pointer
        rounded-md
        border-2
        px-4
        pb-6
        shadow
        transition-[transform,box-shadow]
        duration-500
        active:-translate-x-0.5
        active:translate-y-0.5
        active:shadow-pressed
        max-lg:p-5
        max-sm:p-3`,
        {
          'pt-2.5': paddingSize === 's',
          'pt-7': paddingSize === 'm',
          'border-blue shadow-blue active:shadow-blue': status === 'default',
          'border-red shadow-red active:shadow-red': status === 'active',
          'border-green shadow-green active:shadow-green': status === 'completed',
        },
      )}
      href={`${linkSection}/${threadTokenCurrency}`}
    >
      {status !== 'default' && (
        <div
          className={cn('mb-[1.125rem] border-b-2 border-b-black pb-3 text-sm font-bold', {
            'text-red': status === 'active',
            'text-green': status === 'completed',
          })}
        >
          {statusTitles[status]}
        </div>
      )}
      <h3 className="max-sm:max-w-50 mb-[2.6875rem] overflow-hidden text-ellipsis text-xl font-bold text-blue">
        {title}
      </h3>
      <div className="flex w-full justify-between border-t-2 border-t-black pt-4">
        <div className="leading-none">{formatDate(deadline)}</div>
        <div className="flex">
          <div className="mr-1 flex font-bold leading-none">
            <div className="flex text-red">
              {status === 'active' && (
                <>
                  {convertLovelaceToADA(raisedAmt)}
                  <div className="mx-2 w-0.5 rounded-[0.3125rem] bg-red" />
                </>
              )}
            </div>
            {convertLovelaceToADA(goal)}
          </div>
          <AdaIcon className="fill-black" />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
