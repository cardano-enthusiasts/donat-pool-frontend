import { items } from './data';
import { Main, Secondary, Item, Wrapper, Tertiary } from './HowItWorks.styled';
import { Tutorial } from '..';

const HowItWorks = () => {
  return (
    <>
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
      <Tutorial />
    </>
  );
};

export { HowItWorks };
