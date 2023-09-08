import cn from 'classnames';
import Link from 'next/link';

import { convertLovelaceToADA, formatDate } from '@/shared/helpers';
import ADA from '@public/icons/ADA.svg';

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
    <Link href={`${linkSection}/${threadTokenCurrency}`}>
      <div
        className={cn(
          'flex w-full cursor-pointer flex-col rounded-md border-2 bg-white px-4 pb-6 shadow-[-0.25rem_0.25rem_0] max-lg:p-5 max-sm:p-3',
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
          <div className="leading-none">{formatDate(Number(deadline))}</div>
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

            <ADA className="fill-black" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
