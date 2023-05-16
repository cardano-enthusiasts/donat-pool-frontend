import { Item, Wrapper } from './HowItWorksItems.styled';

const HowItWorksItems = () => {
  const items = [
    'Easily register with a single click',
    'Create a project',
    'Flexible donation options',
    'Withdraw the amount to your wallet',
  ];

  return (
    <Wrapper>
      {items.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </Wrapper>
  );
};

export { HowItWorksItems };
