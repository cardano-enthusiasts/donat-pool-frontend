import cn from 'classnames';

import { Arrow } from '@/shared/components';

import VARIANTS from './constants';
import styles from './styles.module.css';
import { type Props } from './types';

function DashedButton({
  children,
  primaryColor,
  secondaryColor,
  backgroundColor,
  isClickedTheme,
  isFixedWidth = false,
  onClick,
}: React.PropsWithChildren<Props>) {
  return (
    <div className="transition-all duration-500">
      <button
        className={cn(
          styles.common,
          'border-2 border-dashed before:border-2 before:border-dashed',
          VARIANTS.primary[primaryColor],
          VARIANTS.secondary[secondaryColor],
          VARIANTS.background[backgroundColor],
          { 'w-44': isFixedWidth },
        )}
        type="button"
        onClick={onClick}
      >
        {children}

        <div className="absolute right-2.5">
          <Arrow isUp={!isClickedTheme} color={primaryColor} />
        </div>
      </button>
    </div>
  );
}

export default DashedButton;
