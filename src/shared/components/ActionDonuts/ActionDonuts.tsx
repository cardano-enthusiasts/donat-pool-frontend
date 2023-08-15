import classNames from 'classnames';
import { Fragment } from 'react';

import styles from './ActionDonuts.module.css';
import type { Props } from './types';

const ActionDonuts = ({ isAnimationActive }: Props) => {
  const getColumns = () => {
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
  };

  return (
    <div
      className={classNames(
        styles.wrapper,
        {
          absolute: isAnimationActive === false,
        },
        'bg-red',
      )}
    >
      {getColumns()}
      <div className={styles.column1} />
    </div>
  );
};

export { ActionDonuts };
