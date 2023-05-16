import {
  Wrapper,
  Title,
  Description,
  InfoSection,
  ButtonAndInfo,
  MinorDescription,
} from './WhyChooseUs.styled';
import { Button } from '../Button/Button';

const WhyChooseUs = () => {
  return (
    <Wrapper>
      <InfoSection>
        <Title>Donate smarter</Title>
        <Description>
          Наше приложение работает на блокчейне Cardano, и для пользователя
          здесь главные преимущества в быстроте транзакций и низких комиссиях за
          транзакции. Cardano - это блокчейн будущего, специально для тех, кто
          хочет пользоваться именно этой технологией и ADA, мы предоставляем
          такую возможность.
        </Description>
      </InfoSection>
      <InfoSection>
        <Title>Donate with confidence</Title>
        <Description>
          Наш сервис полностью децентрализованный. Это безопасно и нам можно
          доверять. После старта сбора, все средства хранятся на
          смарт-контракте, никто, кроме пользователя, открывшего сбор, не сможет
          вывести токены себе на кошелек.
        </Description>
      </InfoSection>
      <ButtonAndInfo>
        <Button themeType="primary" primaryColor="blue" secondaryColor="green">
          See code
        </Button>
        <MinorDescription>
          Мы открыли для вас код контрактов, чтобы вы могли удостовериться, что
          система безопасна.
        </MinorDescription>
      </ButtonAndInfo>
    </Wrapper>
  );
};

export { WhyChooseUs };
