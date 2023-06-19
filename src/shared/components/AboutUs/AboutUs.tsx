import { useWindowSize } from 'shared/helpers/hooks';

import {
  Wrapper,
  TeamImageWrapper,
  ButtonWrapper,
  StackImg,
  StackTitle,
  Stack,
  KatePhoto,
  OksanaPhoto,
  OlgaPhoto,
  SvetlanaPhoto,
  MariayPhoto,
  SvetlanaAndMariya,
} from './AboutUs.styled';
import { Button } from '../Button/Button';

const AboutUs = () => {
  const stack: Array<{ id: string; src: string }> = [
    { id: 'plutarch', src: '/img/plutarch.svg' },
    { id: 'cardano-transaction-lib', src: '/img/cardano-transaction-lib.svg' },
    { id: 'react', src: '/img/react.svg' },
  ];
  const { width } = useWindowSize();
  const svetaAndMariyaPhotos = (
    <>
      <SvetlanaPhoto src="/img/svetlana.png" />
      <MariayPhoto src="/img/mariya.png" />
    </>
  );
  return (
    <Wrapper>
      <TeamImageWrapper>
        <KatePhoto src="/img/kate.png" />
        <OksanaPhoto src="/img/oksana.png" />
        <OlgaPhoto src="/img/olga.png" />
        {width > 1430 ? (
          svetaAndMariyaPhotos
        ) : (
          <SvetlanaAndMariya>{svetaAndMariyaPhotos}</SvetlanaAndMariya>
        )}
      </TeamImageWrapper>
      <ButtonWrapper>
        <Button themeType="secondary" primaryColor="blue" secondaryColor="red">
          Donate
          <br /> To Us
        </Button>
      </ButtonWrapper>
      <StackTitle>Our stack</StackTitle>
      <Stack>
        {stack.map(({ id, src }) => (
          <StackImg key={id} src={src} alt={id} />
        ))}
      </Stack>
      <Button themeType="primary" primaryColor="red" secondaryColor="blue">
        Read more
      </Button>
    </Wrapper>
  );
};

export { AboutUs };
