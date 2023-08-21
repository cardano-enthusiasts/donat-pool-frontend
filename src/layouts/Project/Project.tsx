import cn from 'classnames';

import styles from './Project.module.css';
import type { Props } from './types';

const Project = ({ onPreviousPageClick, previousPageTitle, title, children }: Props) => {
  return (
    <div className="relative flex justify-center">
      <div className="w-full max-w-[620px]">
        <div className="mb-[60px] flex justify-between max-xl:justify-start max-lg:mb-8">
          <div className={cn(styles.previous, 'text-blue')} onClick={onPreviousPageClick}>
            <div className="max-xl:hidden">{previousPageTitle}</div>
          </div>
          <h1 className="overflow-hidden text-ellipsis">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export { Project };
