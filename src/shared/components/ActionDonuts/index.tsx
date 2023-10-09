import { Fragment } from 'react';

import { COLUMN_1_CLASSES, COLUMN_CLASSES } from './constants';

function ActionDonuts() {
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
      className="max-w-480
        absolute
        flex
        h-full
        w-full
        justify-center
        bg-red
        bg-[length:7.1875rem]
        bg-repeat"
    >
      {getColumns()}
      <div className={COLUMN_1_CLASSES} />
    </div>
  );
}

export default ActionDonuts;
