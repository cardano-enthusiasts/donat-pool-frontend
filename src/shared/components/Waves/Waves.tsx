import cn from 'classnames';

import { useWindowSize } from '@/shared/hooks';

import VARIANTS from './constants';
import type { Props } from './types';
import styles from './Waves.module.css';

function Waves({ color = 'blue', backgroundColor = 'transparent', isUpsideDown = false, isMoving = true }: Props) {
  const size = useWindowSize();

  function getWidthForViewBox() {
    if (size.width < 1280) {
      return 600;
    }
    return 1000;
  }

  const colors = {
    transparent: 'bg-transparent',
    blue: 'bg-blue',
    green: 'bg-green',
    red: 'bg-red',
    black: 'bg-black',
    yellow: 'bg-yellow',
  };

  return (
    <div className={`text-center' relative z-[1] h-[6.25rem] ${colors[backgroundColor]}`}>
      <svg
        className={cn('relative mb-[-0.4375rem] h-[6.25rem] max-w-full', {
          'rotate-180': isUpsideDown,
        })}
        viewBox={`200 0 ${getWidthForViewBox()} 100`}
        width="100%"
        fill="none"
        xmlnsXlink="http://www.w3.org/2000/xlink"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M1487 0.0153834C1471.04 0.29518 1455.13 4.3917 1440.69 12.3029C1410.76 28.701 1374.49 28.701 1344.56 12.3029C1314.63 -4.09508 1278.37 -4.09508 1248.44 12.3029C1218.79 28.5432 1182.94 28.6995 1153.18 12.7717L1152.31 12.2941C1130.53 0.366749 1105.42 -2.88038 1081.83 2.54588C1072.98 4.57873 1064.35 7.83108 1056.19 12.303C1041.22 20.5031 1024.67 24.6026 1008.12 24.6015C991.575 24.5986 975.033 20.4991 960.073 12.3029C945.086 4.09251 928.512 -0.0069864 911.941 0.00445174C895.412 0.014208 878.886 4.1137 863.938 12.3029C848.962 20.5071 832.402 24.6066 815.844 24.6015C799.309 24.5946 782.776 20.4951 767.823 12.3029C752.856 4.10372 736.307 0.00421726 719.759 0.00442788C703.208 0.00297575 686.656 4.10248 671.688 12.3029C656.727 20.4991 640.185 24.5986 623.642 24.6015C607.092 24.6026 590.541 20.5031 575.573 12.3029C560.62 4.11137 544.088 0.0118702 527.555 0.00444441C510.988 -0.00465771 494.42 4.09484 479.438 12.3029C464.469 20.5031 447.918 24.6026 431.368 24.6015C414.825 24.5986 398.283 20.4991 383.323 12.3029C375.16 7.8311 366.526 4.57875 357.679 2.5459C334.087 -2.88039 308.975 0.366737 287.204 12.2941L286.334 12.7704C256.57 28.6995 220.718 28.5436 191.072 12.3029C161.14 -4.09507 124.88 -4.09508 94.9475 12.3029C65.0153 28.701 28.7547 28.701 -1.17751 12.3029C-16.0737 4.14225 -32.5332 0.0406375 -49 0.000301469V173.972H1487V0.0153834Z"
          />
        </defs>

        <g className={cn(isMoving && styles.g)}>
          <use className={VARIANTS[color]} xlinkHref="#gentle-wave" x="48" y="0" />
        </g>
      </svg>
    </div>
  );
}

export default Waves;
