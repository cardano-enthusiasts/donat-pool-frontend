import { Amount, ItemTitle, Line, Wrapper, Title, Item, Label, Img } from './ManagementParams.styled';
import type { Props } from './types';

const ManagementParams = ({
  config: { minAmountParam, maxAmountParam, minDurationParam, maxDurationParam, protocolFeeParam },
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
    <Wrapper>
      <Title>Current protocol parameters</Title>
      <Line />
      {params.map(({ title, id, amount, label }) => (
        <Item key={id}>
          <ItemTitle>
            {title}
            <Label>{label === 'ADA' ? <Img src="/icons/ADA-gray.svg" alt="ada symbol" /> : label}</Label>
          </ItemTitle>
          <Amount>{amount}</Amount>
        </Item>
      ))}
    </Wrapper>
  );
};

export { ManagementParams };
