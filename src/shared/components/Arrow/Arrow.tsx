import classNames from 'classnames';
import { useTheme } from 'styled-components';

import type { Theme } from '@/shared/styles/types';

import type { Props } from './types';

const Arrow = ({ color = 'blue', isUp = false }: Props) => {
  const theme = useTheme() as Theme;
  return (
    <div className={classNames('h-6', { 'rotate-180': isUp })}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icons">
          <path
            id="Vector 11"
            d="M12 19V5M12 5L16 9.36364M12 5L8 9.36364"
            stroke={theme.colors[color]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export { Arrow };
