import { useSelector } from 'react-redux';

import { type AppReduxState } from 'shared/types';

import { Wrapper } from './PrecalculationFee.styled';
import { type Props } from './types';

const PrecalculationFee = ({ goal }: Props) => {
  const { protocolFeeParam } = useSelector(
    (state: AppReduxState) => state.protocol.data.config
  );
  const extraFee = Math.ceil(goal * (protocolFeeParam / 100));

  return (
    <Wrapper>
      Сommission —{' '}
      {extraFee !== 0
        ? `${extraFee} ADA (${protocolFeeParam}%)`
        : `${protocolFeeParam}%`}
    </Wrapper>
  );
};

export { PrecalculationFee };
