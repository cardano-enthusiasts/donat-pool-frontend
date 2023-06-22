import {
  CatImage,
  InnerCircle,
  OuterCircle,
  ScrollHelper1,
  ScrollHelper2,
  ScrollHelper3,
} from './InitialLoading.styled';
import { ActionDonuts } from '../.';

const InitialLoading = ({ windowScroll }) => {
  return (
    <>
      <InnerCircle data-window-scroll={windowScroll / 10} />
      <OuterCircle windowScroll={windowScroll / 10}>
        <ScrollHelper1 />
        <ScrollHelper2 />
        <ScrollHelper3 />
      </OuterCircle>
      <ActionDonuts />
      <CatImage src="/img/cat.svg" />
    </>
  );
};

export { InitialLoading };
