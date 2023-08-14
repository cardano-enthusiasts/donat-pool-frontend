import { useWindowSize } from '@/shared/hooks';

import {
  Wrapper,
  TeamWrapper,
  TeamInner,
  ButtonWrapper,
  KatePhoto,
  OksanaPhoto,
  OlgaPhoto,
  SvetlanaPhoto,
  MariayPhoto,
  SvetlanaAndMariya,
  StackWrapper,
  WhiteDots,
} from './AboutUs.styled';
import { Button, Stack } from '../.';

const AboutUs = () => {
  const { width } = useWindowSize();
  const svetaAndMariyaPhotos = (
    <>
      <SvetlanaPhoto src="/img/svetlana.png" />
      <MariayPhoto src="/img/mariya.png" />
    </>
  );
  return (
    <Wrapper>
      <TeamWrapper>
        <TeamInner>
          <KatePhoto src="/img/kate.png" />
          <OksanaPhoto src="/img/oksana.png" />
          <OlgaPhoto src="/img/olga.png" />
          {width > 1430 ? svetaAndMariyaPhotos : <SvetlanaAndMariya>{svetaAndMariyaPhotos}</SvetlanaAndMariya>}
        </TeamInner>
        <WhiteDots />
      </TeamWrapper>

      <ButtonWrapper>
        <Button themeType="accent" primaryColor="blue" secondaryColor="red">
          Donate
          <br /> To Us
        </Button>
      </ButtonWrapper>
      <StackWrapper>
        <Stack />
      </StackWrapper>
    </Wrapper>
  );
};

export { AboutUs };
