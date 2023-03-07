export interface Props {
  onUpdatedSuccess: () => void;
  onUpdatedError: () => void;
  config: {
    minAmountParam: number;
    maxAmountParam: number;
    minDurationParam: number;
    maxDurationParam: number;
    protocolFeeParam: number;
  };
}
