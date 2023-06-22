import {
  ArrowLeft,
  ArrowRight,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  VerticalLine,
  Wrapper,
} from './ScrollHelper.styled';

const ScrollHelper = () => {
  return (
    <Wrapper>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Circle4 />
      <VerticalLine />
      <ArrowLeft />
      <ArrowRight />
    </Wrapper>
  );
};

export { ScrollHelper };
