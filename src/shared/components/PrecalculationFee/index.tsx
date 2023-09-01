'use client';

import { useAppSelector } from '@/redux/hooks';

import { type Props } from './types';

function PrecalculationFee({ goal }: Props) {
  const protocolFeeParam = useAppSelector((state) => state.appInfo.protocol?.protocolFeeParam);
  const minFee = 2;

  function getExtraFee(protocolFeeParam: number) {
    return Math.max(Math.round(goal * (protocolFeeParam / 100) * Math.pow(10, 6)) / Math.pow(10, 6), minFee);
  }

  return (
    protocolFeeParam && (
      <div className="text-xs font-bold text-red">
        Commission —{' '}
        {getExtraFee(protocolFeeParam) !== 0
          ? `${getExtraFee(protocolFeeParam)} ADA (${String(protocolFeeParam)}%)`
          : `${String(protocolFeeParam)}%`}
      </div>
    )
  );
}

export default PrecalculationFee;
