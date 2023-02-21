export interface Props {
  onUpdatedSuccess: () => void;
  protocol: {
    minAmountParam: number;
    maxAmountParam: number;
    minDurationParam: number;
    maxDurationParam: number;
    protocolFeeParam: number;
  };
}
