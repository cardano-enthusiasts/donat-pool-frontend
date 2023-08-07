'use client';

import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';
import { useEffect } from 'react';

import { Service } from '@/layouts';
import { DropdownSection } from '@/shared/components';

import { basicSection } from './data';
import {
  Wrapper,
  Alert,
  ColorTitle,
  Li,
  Line,
  SubSection,
  Subtitle,
  Title,
  Ul,
  SectionWrapper,
} from './FAQ.styled';

const FAQ = () => {
  useEffect(() => {
    document.title = 'FAQ';
  }, []);
  return (
    <Service>
      <Title>
        Donat.Pool <ColorTitle>FAQ</ColorTitle>
      </Title>
      <Wrapper>
        <DropdownSection title="What is Donat.Pool?">
          <SectionWrapper>
            Donat.Pool is a fundraising service that allows users:
            <Ul>
              <Li>to start fundraising projects</Li>
              <Li>to donate ADA funds to support projects</Li>
            </Ul>
            The Donat.Pool service is deployed on the Cardano blockchain and
            uses the Cardano native cryptocurrency - ADA.
            <Alert>
              Current Donat.Pool version is available on the Cardano
              PreProduction testnet only.
            </Alert>
          </SectionWrapper>
        </DropdownSection>
        <DropdownSection title="How this service is different from other donation services?">
          <SectionWrapper>
            The main difference of Donat.Pool from other donation services is
            that it is the first fundraising service based on the Cardano
            blockchain.
            <SubSection>
              <Subtitle>Low fees and Fast transactions</Subtitle>
              The Cardano blockchain suggests low transaction fees and fast
              transaction speed.
            </SubSection>
            <Line />
            <SubSection>
              <Subtitle>Secure transactions</Subtitle>
              Cardano applications are based on smart contracts that allow to
              make secure transactions. Every transaction should pass the set of
              validations before it is recognized as legal.
            </SubSection>
            <Line />
            <SubSection>
              <Subtitle>Transparency and privacy</Subtitle>
              All transactions are transparent - everybody can trace all
              transactions with the Cardano blockchain explorer. At the same
              time you provide the service with as little personal information
              as you want. In fact, the minimal information the service requires
              is your wallet address.
            </SubSection>
            <Line />
            <SubSection>
              <Subtitle>Open Source</Subtitle>
              Donat.Pool is based on Cardano smart contracts and all validations
              guarantee secure transactions with predictable logic. We made the
              code of smart contracts publicly available to show algorithms of
              transaction building and validation used in the Donat.Pool.
              Everyone can see the source code and ensure that all transactions
              are secure.
            </SubSection>
          </SectionWrapper>
        </DropdownSection>

        <DropdownSection title="How to register?">
          <SectionWrapper>
            The only thing you need to do is to connect your Nami wallet to
            Donat.Pool. Connection means that you allow Donat.Pool to call your
            Nami wallet and get information about your wallet balance. It&#39;s
            necessary for building transactions, and nobody can manage your
            wallet funds without your personal signature to confirm each
            transaction - only you can sign and submit the transaction.
            <Alert>
              Donat.Pool service is available only for Chrome, Chromium, Brave
              and Edge browsers with the installed Nami wallet extension.
            </Alert>
            <Alert>
              How to enable Nami wallet to work with any smart contract you can
              find <Link href="/#tutorial">here.</Link>
            </Alert>
          </SectionWrapper>
        </DropdownSection>

        <DropdownSection title="How to start a new project?">
          <SectionWrapper>
            <Ul>
              <Li>
                To start a project, go to the &#39;My projects&#39; page and
                press the &#39;Create a new project&#39; button. A fundraising
                project consists of a title, description, target amount and
                duration. Choose these parameters and press the confirm button.
              </Li>
              <Li>
                Donat.Pool will call the Nami wallet extension and it will open
                with transaction info. Here you can check the transaction amount
                and transaction fee and sign the transaction using your Nami
                wallet password.
              </Li>
            </Ul>
            <Alert>
              Technically creating a project means that you create a separate
              storage on the Donat.Pool script address for your project funds,
              so you have to put 4 ADA to this storage temporarily. You will get
              these 4 ADA back along with the funds raised. These 4 ADA are
              taken from your wallet so be ready to sign the transaction with
              Nami.
            </Alert>
            <Ul>
              <Li>
                Wait for transaction confirmation. Creating a new project is a
                blockchain transaction so you have to wait for a while until the
                transaction is confirmed.
              </Li>
              <Li>
                After confirmation you get a unique link to the newly created
                project which you may share with the community.
              </Li>
            </Ul>
          </SectionWrapper>
        </DropdownSection>

        {basicSection.map(({ title, description }) => (
          <DropdownSection title={HTMLReactParser(title) as string} key={title}>
            <SectionWrapper>{HTMLReactParser(description)}</SectionWrapper>
          </DropdownSection>
        ))}
      </Wrapper>
    </Service>
  );
};

export default FAQ;
