import { useSelector } from 'react-redux';

import { type AppReduxState } from 'shared/types';

import { Wrapper } from './PrecalculationFee.styled';

const PrecalculationFee = ({ goal }) => {
  const { protocolFeeParam } = useSelector(
    (state: AppReduxState) => state.protocol.data.config
  );
  const extraFee = Math.ceil(goal * (protocolFeeParam / 100));
  console.log(protocolFeeParam);

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
