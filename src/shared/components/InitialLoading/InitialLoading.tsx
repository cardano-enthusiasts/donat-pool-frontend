import { CatImage, InnerCircle, OuterCircle } from './InitialLoading.styled';
import { type Props } from './types';
import { ActionDonuts, ScrollHelper } from '../.';

const InitialLoading = ({ windowScroll, isAnimationActive }: Props) => {
  return (
    <>
      <InnerCircle
        data-window-scroll={windowScroll / 10}
        windowScroll={windowScroll / 10}
        isAnimationActive={isAnimationActive}
      />
      <OuterCircle
        windowScroll={windowScroll / 10}
        isAnimationActive={isAnimationActive}
      >
        <ScrollHelper />
      </OuterCircle>
      <ActionDonuts isAnimationActive={isAnimationActive} />
      <CatImage src="/img/cat.svg" isAnimationActive={isAnimationActive} />
    </>
  );
};

export { InitialLoading };
