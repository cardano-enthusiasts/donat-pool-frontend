import {
  Main,
  Secondary,
  Item,
  Wrapper,
  Tertiary,
} from './HowItWorksItems.styled';

const HowItWorksItems = () => {
  const items = [
    {
      title: 'Easily register with a single click',
      description: 'Create your account with just connecting your lightwallet',
      descriptionMinor: 'Works only with Nami wallet',
      id: 0,
    },
    {
      title: 'Create a project',
      description:
        'Create a project and share a link to the project page with your followers/contributors.',
      id: 1,
    },
    {
      title: 'Flexible donation options',
      description: 'Withdraw the amount to your wallet',
      id: 2,
    },
    {
      title: 'Withdraw the amount to your wallet',
      description:
        'Withdraw the funds with just a single click and a small service fee after the project campaign is completed',
      id: 3,
    },
  ];

  return (
    <Wrapper>
      {items.map(({ title, description, descriptionMinor, id }) => (
        <Item key={id}>
          <Main>{title}</Main>
          <Secondary>
            {description}
            {descriptionMinor && <Tertiary>{descriptionMinor}</Tertiary>}
          </Secondary>
        </Item>
      ))}
    </Wrapper>
  );
};

export { HowItWorksItems };
