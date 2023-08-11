import classNames from 'classnames';

import { useWindowSize } from '@/shared/hooks';

import styles from './Project.module.scss';
import type { Props } from './types';

const Project = ({ onPreviousPageClick, previousPageTitle, title, children }: Props) => {
  const { width } = useWindowSize();

  return (
    <div className="relative flex justify-center">
      <div className="w-full max-w-[620px]">
        <div className="mb-[60px] flex justify-between max-xl:justify-start max-lg:mb-8">
          <div className={classNames(styles.previous, 'text-blue')} onClick={onPreviousPageClick}>
            {width > 1200 ? previousPageTitle : ''}
          </div>
          <h1 className="overflow-hidden text-ellipsis">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export { Project };
