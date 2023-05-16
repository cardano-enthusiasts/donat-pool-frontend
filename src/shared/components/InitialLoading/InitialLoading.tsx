import {
  CatImage,
  InnerCircle,
  OuterCircle,
  Wrapper,
} from './InitialLoading.styled';
import { ActionDonuts } from '../ActionDonuts/ActionDonuts';

const InitialLoading = ({ windowScroll }) => {
  return (
    <Wrapper>
      <InnerCircle windowScroll={windowScroll / 10} />
      <OuterCircle windowScroll={windowScroll / 10} />
      <ActionDonuts />
      <CatImage />
    </Wrapper>
  );
};

export { InitialLoading };
