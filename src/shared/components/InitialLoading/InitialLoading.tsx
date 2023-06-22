import { CatImage, InnerCircle, OuterCircle } from './InitialLoading.styled';
import { ActionDonuts, ScrollHelper } from '../.';

const InitialLoading = ({ windowScroll }) => {
  return (
    <>
      <InnerCircle data-window-scroll={windowScroll / 10} />
      <OuterCircle windowScroll={windowScroll / 10}>
        <ScrollHelper />
      </OuterCircle>
      <ActionDonuts />
      <CatImage src="/img/cat.svg" />
    </>
  );
};

export { InitialLoading };
