import {
  Container,
  Content,
  Description,
  Img,
  Inner,
  Title,
} from './NotAvailableError.styled';
import { Button, Waves } from '..';

const NotAvailableError = () => {
  return (
    <Container>
      <Inner>
        <Content>
          <Title>Wallet is not available </Title>
          <Img src="/img/sad-cat-with-purple-border.svg" />
          <Description>
            Please install Nami wallet in a suitable browser (Chrome, Brave)
          </Description>
          <Button
            href="https://namiwallet.io/"
            themeType="double-bordered"
            primaryColor="blue"
            tertiaryColor="red"
            width="100%"
          >
            Download App
          </Button>
        </Content>
      </Inner>

      <Waves />
    </Container>
  );
};

export { NotAvailableError };
