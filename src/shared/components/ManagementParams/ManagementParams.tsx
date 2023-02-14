import {
  Amount,
  ItemTitle,
  Line,
  Title,
  Inner,
} from './ManagementParams.styled';

const ManagementParams = () => {
  const params = [
    {
      title: 'Min amount param',
      id: 'minAmountParam',
      amount: 50000000,
    },
    {
      title: 'Max amount param',
      id: 'maxAmountParam',
      amount: 1000000000,
    },
    {
      title: 'Min duration param',
      id: 'minDurationParam',
      amount: 100,
    },
    {
      title: 'Max duration param',
      id: 'maxDurationParam',
      amount: 1000,
    },
    {
      title: 'Protocol fee param',
      id: 'protocolFeeParam',
      amount: 10,
    },
  ];
  return (
    <>
      <Title>Current protocol parameters</Title>
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
