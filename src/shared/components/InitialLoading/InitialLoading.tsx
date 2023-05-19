import { CatImage, InnerCircle, OuterCircle } from './InitialLoading.styled';
import { ActionDonuts } from '../ActionDonuts/ActionDonuts';

const InitialLoading = ({ windowScroll }) => {
  return (
    <>
      <InnerCircle windowScroll={windowScroll / 10} />
      <OuterCircle windowScroll={windowScroll / 10} />
      <ActionDonuts />
      <CatImage />
    </>
  );
};

export { InitialLoading };
