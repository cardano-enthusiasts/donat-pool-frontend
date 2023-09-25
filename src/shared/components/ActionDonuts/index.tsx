import cn from 'classnames';
import { Fragment } from 'react';

import { COLUMN_1_CLASSES, COLUMN_CLASSES } from './constants';
import type { Props } from './types';

function ActionDonuts({ animationIsActive }: Props) {
  function getColumns() {
    const donuts: React.ReactNode[] = [];

    for (let i = 0; i < 6; i++) {
      donuts.push(
        <Fragment key={i}>
          <div className={COLUMN_1_CLASSES} />
          <div className={`${COLUMN_CLASSES} animate-[movingDonut2_50s_linear_infinite]`} />
        </Fragment>,
      );
    }

    return donuts;
  }

  return (
    <div
      className={cn(
        'max-w-480 flex h-full w-full justify-center bg-red bg-[length:7.1875rem] bg-repeat max-xl:absolute',
        {
          absolute: animationIsActive === false,
        },
      )}
    >
      {getColumns()}
      <div className={COLUMN_1_CLASSES} />
    </div>
  );
}

export default ActionDonuts;
