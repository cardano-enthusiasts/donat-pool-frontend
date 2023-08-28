import cn from 'classnames';
import { Fragment } from 'react';

import styles from './ActionDonuts.module.css';
import { Props } from './types';

function ActionDonuts({ animationIsActive }: Props) {
  function getColumns() {
    const donuts: React.ReactNode[] = [];

    for (let i = 0; i < 6; i++) {
      donuts.push(
        <Fragment key={i}>
          <div className={styles.column1} />
          <div className={styles.column2} />
        </Fragment>,
      );
    }

    return donuts;
  }

  return (
    <div
      className={cn(
        styles.wrapper,
        {
          absolute: animationIsActive === false,
        },
        'bg-red',
      )}
    >
      {getColumns()}
      <div className={styles.column1} />
    </div>
  );
}

export default ActionDonuts;
