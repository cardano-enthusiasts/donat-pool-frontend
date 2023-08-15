import { Container, Content, Description, Img, Inner, Title } from './NotAvailableError.styled';
import { DoubleBorderedButton, Waves } from '..';

const NotAvailableError = () => {
  return (
    <Container>
      <Inner>
        <Content>
          <Title>Wallet is not available </Title>
          <Img src="/img/sad-cat-with-purple-border.svg" />
          <Description>Please install Nami wallet in a suitable browser (Chrome, Brave)</Description>
          <DoubleBorderedButton
            href="https://namiwallet.io/"
            primaryColor="blue"
            backgroundColor="red"
            isFullWidth={true}
          >
            Download App
          </DoubleBorderedButton>
        </Content>
      </Inner>

      <Waves />
    </Container>
  );
};

export { NotAvailableError };
