import classNames from 'classnames';

import styles from './DashedButton.module.css';
import { Props } from './types';
import { Arrow } from '..';

const DashedButton = ({
  onClick,
  children,
  primaryColor,
  secondaryColor,
  backgroundColor,
  isClickedTheme,
  isFixedWidth = false,
}: Props) => {
  const variants = {
    primary: { red: 'text-red border-red', blue: 'text-blue border-blue' },
    secondary: { red: 'before:border-red', blue: 'before:border-blue' },
    background: {
      yellow: 'bg-yellow',
      green: 'bg-green',
    },
  };

  return (
    <div className="transition-all duration-500">
      <button
        className={classNames(
          styles.common,
          'border-2 border-dashed py-2.5 pl-5 pr-10 text-xl before:border-2 before:border-dashed',
          variants.primary[primaryColor],
          variants.secondary[secondaryColor],
          variants.background[backgroundColor],
          { 'w-44': isFixedWidth },
        )}
        onClick={onClick}
        type="button"
      >
        {children}

        <div className="absolute right-2.5">
          <Arrow isUp={!isClickedTheme} color={primaryColor} />
        </div>
      </button>
    </div>
  );
};

export { DashedButton };
