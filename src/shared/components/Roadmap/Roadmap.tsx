import { Fragment } from 'react';

import { texts } from './data';
import {
  Inner,
  Li,
  Subtitle,
  Title,
  Ul,
  Wrapper,
  SubLi,
} from './Roadmap.styled';

const Roadmap = () => {
  const getSubLis = (item) =>
    item.map((subItem) => <SubLi key={subItem.id}>{subItem}</SubLi>);

  return (
    <Wrapper>
      <Inner>
        <Title>{texts.title}</Title>
        {texts.phases.map(({ title, items }) => (
          <Fragment key={title}>
            <Subtitle>{title}</Subtitle>
            <Ul>
              {items.map((item) => {
                return (
                  <Li key={item.id}>
                    {Array.isArray(item) ? getSubLis(item) : item.title}
                  </Li>
                );
              })}
            </Ul>
          </Fragment>
        ))}
      </Inner>
    </Wrapper>
  );
};

export { Roadmap };
