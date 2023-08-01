import { useSelector } from 'react-redux';

import { type AppReduxState } from '@/shared/types';

import { Wrapper } from './PrecalculationFee.styled';
import { type Props } from './types';

const PrecalculationFee = ({ goal }: Props) => {
  const { protocolFeeParam } = useSelector(
    (state: AppReduxState) => state.protocol.data.config,
  );
  const minFee = 2;
  const extraFee = Math.max(
    Math.round(goal * (protocolFeeParam / 100) * Math.pow(10, 6)) /
      Math.pow(10, 6),
    minFee,
  );

  return (
    <Wrapper>
      Commission —{' '}
      {extraFee !== 0
        ? `${extraFee} ADA (${protocolFeeParam}%)`
        : `${protocolFeeParam}%`}
    </Wrapper>
  );
};

export { PrecalculationFee };
