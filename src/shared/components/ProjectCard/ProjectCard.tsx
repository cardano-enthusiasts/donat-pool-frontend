import cn from 'classnames';
import Link from 'next/link';

import { formatDate } from '@/shared/helpers';

import type { Props } from './types';

const ProjectCard = ({
  data: { deadline, title, goal, raisedAmt, threadTokenCurrency },
  linkSection,
  status = 'default',
  paddingSize = 'm',
}: Props) => {
  const statusTitles = {
    active: 'Active',
    completed: 'Completed',
  };

  return (
    <Link href={`/${linkSection}/${threadTokenCurrency}`}>
      <div
        className={cn(
          'flex w-full cursor-pointer flex-col rounded-md border-2 bg-white px-4 pb-6 shadow-card max-lg:p-5 max-sm:p-3',
          {
            'pt-2.5': paddingSize === 's',
            'pt-7': paddingSize === 'm',
            'border-blue shadow-blue': status === 'default',
            'border-red shadow-red': status === 'active',
            'border-green shadow-green': status === 'completed',
          },
        )}
      >
        {status !== 'default' && (
          <div
            className={cn('mb-[18px] border-b-2 border-b-black pb-3 text-sm font-bold', {
              'text-red': status === 'active',
              'text-green': status === 'completed',
            })}
          >
            {statusTitles[status]}
          </div>
        )}
        <h3 className="max-sm:max-w-50 mb-[43px] overflow-hidden text-ellipsis text-xl font-bold text-blue">{title}</h3>
        <div className="flex w-full justify-between border-t-2 border-t-black pt-4">
          <div className="leading-none">{formatDate(Number(deadline))}</div>
          <div className="flex font-bold leading-none after:ml-1 after:h-[14px] after:w-[14px] after:content-ada">
            <div className="flex text-red">
              {status === 'active' && (
                <>
                  {Number(raisedAmt) / 1000000}
                  <div className="mx-2 w-0.5 rounded-[5px] bg-red" />
                </>
              )}
            </div>
            {Number(goal) / 1000000}
          </div>
        </div>
      </div>
    </Link>
  );
};

export { ProjectCard };
