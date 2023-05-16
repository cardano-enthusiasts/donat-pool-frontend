import { useTheme } from 'styled-components';

import { type Theme } from 'shared/styles/types';

import { type Props } from './types';
import { G, SVG, Wrapper } from './Waves.styled';

const Waves = ({ color = 'blue', backgroundColor = 'transparent' }: Props) => {
  const theme = useTheme() as Theme;
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <SVG
        viewBox="200 0 1000 100"
        fill="none"
        xmlnsXlink="http://www.w3.org/2000/xlink"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M95.2037 12.3217L70.6774 25.7581C56.0046 33.7965 38.2454 33.7965 23.5726 25.7581C-9.09529 7.86137 -49 31.5006 -49 68.7495V104.061C-49 142.687 -17.6874 174 20.9386 174H1419.06C1457.69 174 1489 142.687 1489 104.061V68.7495C1489 31.5006 1449.1 7.86138 1416.43 25.7581C1401.75 33.7965 1384 33.7965 1369.32 25.7581L1344.8 12.3217C1314.86 -4.07634 1278.62 -4.06749 1248.69 12.3305C1218.76 28.7286 1182.49 28.7286 1152.56 12.3305C1122.63 -4.06749 1086.37 -4.06749 1056.44 12.3305C1026.51 28.7286 990.245 28.7286 960.313 12.3305C930.38 -4.06749 894.12 -4.06749 864.188 12.3305C834.255 28.7286 797.995 28.7286 768.063 12.3305C738.13 -4.06749 701.87 -4.06749 671.938 12.3305C642.005 28.7286 605.745 28.7286 575.812 12.3305C545.88 -4.06749 509.62 -4.06749 479.688 12.3305C449.755 28.7286 413.495 28.7286 383.563 12.3305C353.63 -4.06749 317.37 -4.06749 287.438 12.3305C257.505 28.7286 221.245 28.7286 191.313 12.3305C161.38 -4.06749 125.136 -4.07634 95.2037 12.3217Z"
          />
        </defs>

        <G>
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill={theme.colors[color] ? theme.colors[color] : color}
          />
        </G>
      </SVG>
    </Wrapper>
  );
};

export { Waves };
