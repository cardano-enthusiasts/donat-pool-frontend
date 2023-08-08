import HTMLReactParser from 'html-react-parser';
import { Fragment } from 'react';

import { ROUTES } from '@/shared/constants';
import { roadmapText } from '@/shared/data';

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
import { type Props } from './types';
import { Button } from '../.';

const Roadmap = ({ isActive }: Props) => {
  const getSubLis = (item: any) => {
    return item.subItems.map(({ id, title }: any) => (
      <SubLi key={id}>{title}</SubLi>
    ));
  };

  return (
    <WrapperAndButton>
      <Wrapper>
        <Inner isActive={isActive}>
          {roadmapText.phases.map(({ title, items }) => (
            <Fragment key={title}>
              <Title>{HTMLReactParser(title)}</Title>
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
      <ButtonWrapper>
        <Button
          themeType="accent"
          primaryColor="blue"
          secondaryColor="green"
          size="s"
          href={ROUTES.roadmap}
          isAnimation={true}
          fontColor="green"
        >
          All phases
        </Button>
      </ButtonWrapper>
    </WrapperAndButton>
  );
};

export { Roadmap };
