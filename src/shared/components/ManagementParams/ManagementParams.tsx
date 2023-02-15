import { Amount, ItemTitle, Line, Inner } from './ManagementParams.styled';

const ManagementParams = () => {
  const params = [
    {
      title: 'Min amount',
      id: 'minAmountParam',
      amount: 50000000,
    },
    {
      title: 'Max amount',
      id: 'maxAmountParam',
      amount: 1000000000,
    },
    {
      title: 'Min duration',
      id: 'minDurationParam',
      amount: 100,
    },
    {
      title: 'Max duration',
      id: 'maxDurationParam',
      amount: 1000,
    },
    {
      title: 'Protocol fee',
      id: 'protocolFeeParam',
      amount: 10,
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
