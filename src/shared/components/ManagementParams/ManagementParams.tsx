import {
  AmountAndLabel,
  ItemTitle,
  Line,
  Inner,
} from './ManagementParams.styled';
import { type Props } from './types';

const ManagementParams = ({
  config: {
    minAmountParam,
    maxAmountParam,
    minDurationParam,
    maxDurationParam,
    protocolFeeParam,
  },
}: Props) => {
  const params = [
    {
      title: 'Min amount',
      id: 'minAmountParam',
      amount: minAmountParam,
      label: 'ADA',
    },
    {
      title: 'Max amount',
      id: 'maxAmountParam',
      amount: maxAmountParam,
      label: 'ADA',
    },
    {
      title: 'Min duration',
      id: 'minDurationParam',
      amount: minDurationParam,
      label: 'min',
    },
    {
      title: 'Max duration',
      id: 'maxDurationParam',
      amount: maxDurationParam,
      label: 'min',
    },
    {
      title: 'Protocol fee',
      id: 'protocolFeeParam',
      amount: protocolFeeParam,
      label: '%',
    },
  ];

  return (
    <Inner>
      {params.map(({ title, id, amount, label }) => (
        <Line key={id}>
          <ItemTitle>{title}</ItemTitle>
          <AmountAndLabel>
            <div>{amount}</div>
            <div>{label}</div>
          </AmountAndLabel>
        </Line>
      ))}
    </Inner>
  );
};

export { ManagementParams };
