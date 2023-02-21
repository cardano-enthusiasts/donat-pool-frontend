export interface Props {
  onUpdatedSuccess: () => void;
  onUpdatedError: () => void;
  protocol: {
    minAmountParam: number;
    maxAmountParam: number;
    minDurationParam: number;
    maxDurationParam: number;
    protocolFeeParam: number;
  };
}
