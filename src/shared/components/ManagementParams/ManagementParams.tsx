import { Amount, ItemTitle, Line, Inner } from './ManagementParams.styled';
import { type Props } from './types';

const ManagementParams = ({
  protocol: {
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
    },
    {
      title: 'Max amount',
      id: 'maxAmountParam',
      amount: maxAmountParam,
    },
    {
      title: 'Min duration',
      id: 'minDurationParam',
      amount: minDurationParam,
    },
    {
      title: 'Max duration',
      id: 'maxDurationParam',
      amount: maxDurationParam,
    },
    {
      title: 'Protocol fee',
      id: 'protocolFeeParam',
      amount: protocolFeeParam,
    },
  ];

  return (
    <>
      <Inner>
        {params.map(({ title, id, amount }) => (
          <Line key={id}>
            <ItemTitle>{title}</ItemTitle>
            <Amount>{amount}</Amount>
          </Line>
        ))}
      </Inner>
    </>
  );
};

export default ManagementParams;
