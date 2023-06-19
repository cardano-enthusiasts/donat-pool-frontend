import { Fragment } from 'react';

import { texts } from './data';
import {
  Inner,
  Li,
  Title,
  Ul,
  Wrapper,
  SubLi,
  WrapperAndButton,
  ButtonWrapper,
} from './Roadmap.styled';
import { Button } from '../.';

const Roadmap = () => {
  const getSubLis = (item) => {
    return item.subItems.map(({ id, title }) => (
      <SubLi key={id}>{title}</SubLi>
    ));
  };

  return (
    <WrapperAndButton>
      <Wrapper>
        <Inner>
          {texts.phases.map(({ title, items }) => (
            <Fragment key={title}>
              <Title>{title}</Title>
              <Ul>
                {items.map((item) => {
                  return item.title ? (
                    <Li key={item.id}>{item.title}</Li>
                  ) : (
                    getSubLis(item)
                  );
                })}
              </Ul>
            </Fragment>
          ))}
        </Inner>
      </Wrapper>
      {/* <ButtonWrapper>
        <Button
          themeType="secondary"
          primaryColor="blue"
          secondaryColor="green"
          size="s"
        >
          All phases
        </Button>
      </ButtonWrapper> */}
    </WrapperAndButton>
  );
};

export { Roadmap };
