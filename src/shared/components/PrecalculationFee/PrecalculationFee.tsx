import { useSelector } from 'react-redux';

import { type AppReduxState } from 'shared/types';

const PrecalculationFee = ({ goal }) => {
  const { protocolFeeParam } = useSelector(
    (state: AppReduxState) => state.protocol.data.config
  );
  const chargedFee = Math.ceil(goal / ((100 - protocolFeeParam) / 100));

  return chargedFee !== 0 && <>{chargedFee} ADA will be charged</>;
};

export { PrecalculationFee };
