import { Inner, Wrapper } from './Roadmap.styled';

const Roadmap = () => {
  const text = (
    <>
      1 Protocol: on-chain and off-chain logic for starting, updating and
      closing protocol with Nami light-wallet DonationPool: on-chain and
      off-chain logic for creating project and receiving raised funds with Nami
      light-wallet Donate action: on-chain and off-chain logic for donating to
      an arbitrary project with Nami light-wallet Unit tests and endpoint tests
      Frontend for the implemented services Deploying to Cardano pre-production
      testnet Beta-testing in Cardano pre-production testnet
    </>
  );
  return (
    <Wrapper>
      <Inner>{text}</Inner>
    </Wrapper>
  );
};

export { Roadmap };
