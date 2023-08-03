import { useAppSelector } from 'store/hooks';

import { Wrapper } from './PrecalculationFee.styled';
import { type Props } from './types';

const PrecalculationFee = ({ goal }: Props) => {
  const protocolFeeParam = useAppSelector(
    (state) => state.appInfo.protocol?.protocolFeeParam,
  );
  const minFee = 2;
  const getExtraFee = (protocolFeeParam: number) => {
    return Math.max(
      Math.round(goal * (protocolFeeParam / 100) * Math.pow(10, 6)) /
        Math.pow(10, 6),
      minFee,
    );
  };

  return (
    protocolFeeParam && (
      <Wrapper>
        Commission —{' '}
        {getExtraFee(protocolFeeParam) !== 0
          ? `${getExtraFee(protocolFeeParam)} ADA (${String(
              protocolFeeParam,
            )}%)`
          : `${String(protocolFeeParam)}%`}
      </Wrapper>
    )
  );
};

export { PrecalculationFee };
