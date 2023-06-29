import { items } from './data';
import {
  Main,
  Secondary,
  Item,
  Wrapper,
  Tertiary,
} from './HowItWorksItems.styled';

const HowItWorksItems = () => {
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
