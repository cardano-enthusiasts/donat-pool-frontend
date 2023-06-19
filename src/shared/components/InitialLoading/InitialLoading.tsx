import {
  CatImage,
  InnerCircle,
  OuterCircle,
  ScrollHelper1,
  ScrollHelper2,
  ScrollHelper3,
} from './InitialLoading.styled';
import { ActionDonuts } from '../ActionDonuts/ActionDonuts';

const InitialLoading = ({ windowScroll }) => {
  return (
    <>
      <InnerCircle windowScroll={windowScroll / 10} />
      <OuterCircle windowScroll={windowScroll / 10}>
        <ScrollHelper1 />
        <ScrollHelper2 />
        <ScrollHelper3 />
      </OuterCircle>
      <ActionDonuts />
      <CatImage />
    </>
  );
};

export { InitialLoading };
