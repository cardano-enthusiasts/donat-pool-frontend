import cn from 'classnames';

import { type Props } from './types';

function Arrow({ color = 'blue', isUp = false }: Props) {
  return (
    <div className={cn('h-6', { 'rotate-180': isUp })}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icons">
          <path
            className={cn({ 'stroke-blue': color === 'blue', 'stroke-red': color === 'red' })}
            id="Vector 11"
            d="M12 19V5M12 5L16 9.36364M12 5L8 9.36364"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

export default Arrow;
