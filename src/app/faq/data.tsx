import Link from 'next/link';

import { Line, AlertNote, Ul } from '@/shared/components';
import { ROUTES } from '@/shared/constants';

const QUESTIONS = [
  {
    title: 'What is Donat.Pool?',
    content: (
      <>
        Donat.Pool is a fundraising service that allows users:
        <Ul texts={['to start fundraising projects', 'to donate ADA funds to support projects']} />
        The Donat.Pool service is deployed on the Cardano blockchain and uses the Cardano native cryptocurrency - ADA.
        <AlertNote>Current Donat.Pool version is available on the Cardano PreProduction testnet only.</AlertNote>
      </>
    ),
  },
  {
    title: 'How this service is different from other donation services?',
    content: (
      <>
        The main difference of Donat.Pool from other donation services is that it is the first fundraising service based
        on the Cardano blockchain.
        <div>
          <h3 className="mb-3 text-[1.25rem] font-bold text-gray-tertiary">Low fees and Fast transactions</h3>
          The Cardano blockchain suggests low transaction fees and fast transaction speed.
        </div>
        <Line />
        <div>
          <h3 className="mb-3 text-[1.25rem] font-bold text-gray-tertiary">Secure transactions</h3>
          Cardano applications are based on smart contracts that allow to make secure transactions. Every transaction
          should pass the set of validations before it is recognized as legal.
        </div>
        <Line />
        <div>
          <h3 className="mb-3 text-[1.25rem] font-bold text-gray-tertiary">Transparency and privacy</h3>
          All transactions are transparent - everybody can trace all transactions with the Cardano blockchain explorer.
          At the same time you provide the service with as little personal information as you want. In fact, the minimal
          information the service requires is your wallet address.
        </div>
        <Line />
        <div>
          <h3 className="mb-3 text-[1.25rem] font-bold text-gray-tertiary">Open Source</h3>
          Donat.Pool is based on Cardano smart contracts and all validations guarantee secure transactions with
          predictable logic. We made the code of smart contracts publicly available to show algorithms of transaction
          building and validation used in the Donat.Pool. Everyone can see the source code and ensure that all
          transactions are secure.
        </div>
      </>
    ),
  },
  {
    title: 'How to register?',
    content: (
      <>
        The only thing you need to do is to connect your Nami wallet to Donat.Pool. Connection means that you allow
        Donat.Pool to call your Nami wallet and get information about your wallet balance. It&#39;s necessary for
        building transactions, and nobody can manage your wallet funds without your personal signature to confirm each
        transaction - only you can sign and submit the transaction.
        <AlertNote>
          Donat.Pool service is available only for Chrome, Chromium, Brave and Edge browsers with the installed Nami
          wallet extension.
        </AlertNote>
        <AlertNote>
          How to enable Nami wallet to work with any smart contract you can find{' '}
          <Link href={ROUTES.homeTutorial}>here.</Link>
        </AlertNote>
      </>
    ),
  },
  {
    title: 'How to start a new project?',
    content: (
      <>
        <Ul
          texts={[
            'To start a project, go to the "My projects" page and press the "Create a new project" button. A fundraising project consists of a title, description, target amount and duration. Choose these parameters and press the confirm button.',
            'Donat.Pool will call the Nami wallet extension and it will open with transaction info. Here you can check the transaction amount and transaction fee and sign the transaction using your Nami wallet password.',
          ]}
        />
        <AlertNote>
          Technically creating a project means that you create a separate storage on the Donat.Pool script address or
          your project funds, so you have to put 4 ADA to this storage temporarily. You will get these 4 ADA back along
          with the funds raised. These 4 ADA are taken from your wallet so be ready to sign the transaction with Nami.
        </AlertNote>
        <Ul
          texts={[
            'Wait for transaction confirmation. Creating a new project is a blockchain transaction so you have to wait for a while until the transaction is confirmed.',
            'After confirmation you get a unique link to the newly created project which you may share with the community.',
          ]}
        />
      </>
    ),
  },
  {
    title: 'Is it possible to edit a project title or other information after creating a project?',
    content:
      "Project title, amount to raise, project duration and creator's wallet are immutable parameters that are stored on the Cardano blockchain, so it's impossible to edit these parameters.",
  },
  {
    title: 'What is a Donat.Pool service fee?',
    content:
      'A Donat.Pool service fee is a fee that must be paid to the service after completing a fundraising project. The interest rate is established by the service protocol and the project owner has to agree with it while creating a project. The service fee interest rate is an immutable parameter so it cannot be changed after starting a project even if it was changed in the Donat.Pool protocol. The minimum fee is 2 ADA, so the final fee is calculated as a maximum of 2 ADA or the actual percentage of the raised amount. The service fee is paid only once automatically when the project owner receives the raised funds.',
  },
  {
    title: 'Is it possible to donate to my own fundraising project?',
    content: 'Yes, there are no restrictions about it.',
  },
  {
    title: 'Is it possible to donate after a project deadline?',
    content:
      'No, the only possible action after the project deadline is to receive raised funds, it may be initiated by a project owner.',
  },
  {
    title: 'Is it possible to donate after raising a target amount?',
    content:
      "No, if the target amount is raised, the only possible action is to receive funds. In this case receiving funds is possible even if the deadline hasn't been reached.",
  },
  {
    title: 'Who can withdraw the raised funds?',
    content:
      "Only a project creator can receive the raised funds. Information about the creator's wallet address is recorded on the blockchain, so it's impossible to receive funds with different wallets. Remember that after creating a project you should keep access to the current wallet, otherwise the funds stay locked on a script address forever. ",
  },
  {
    title: 'How to receive funds?',
    content:
      "It's possible to receive funds in two cases only: either if a deadline is reached or if the full amount is raised (or both). After fulfilling these conditions a project owner gets access to funds withdrawal.",
  },
  {
    title: 'Is the partial withdrawal possible? ',
    content: 'No, a project owner can withdraw only the full amount at once.',
  },
  {
    title: 'Does the service guarantee that the information provided by project owners is trustworthy?',
    content:
      'No, donors should be careful and support projects only if they get a project link from a reliable person (or service).',
  },

  {
    title: 'How many projects can I do on Donat.Pool?',
    content: 'There are no restrictions on the number of projects you can create',
  },
  {
    title:
      'How can I be sure that the funds raised will be spent in the way it was mentioned in the project description?',
    content:
      "As a donor, you can trace the raised funds using the Cardano observer. But Donat.Pool can't guarantee that funds will be spent in the way it was mentioned in the project description. You should donate only to reliable project owners, so that you can be confident that the resource where the donation link is shared is trustworthy.",
  },
  {
    title: 'Do I have to provide a report on how the funds have been spent?',
    content:
      "Donat.Pool doesn't require a report, but if you want to build trust with your community and plan to start more donation projects, you can provide reports on your resource (website, youtube channel, etc) which you used to share the donation link.",
  },
  {
    title: 'What are the minimum and maximum fundraising periods? What maximum amount can I claim?',
    content: (
      <>
        Min and max periods, min and max amount, and a Donat.Pool fee are dynamically changing parameters. They are
        regulated by governance token owners through a decentralized voting process.
        <br />
        Changes can affect only new projects. When you create a project you agree with the current parameters (Min and
        max periods, min and max amount, and a Donat.Pool fee) and they will be fixed for this project and can&#39;t be
        changed.
      </>
    ),
  },
  {
    title: "What happens to funds if I don't reach my goal?",
    content:
      "If your fundraising doesn't earn the target amount, at the end of the donation period you can receive the raised funds on the same terms - a service fee will be based on the raised amount.",
  },
  {
    title: 'What can I raise funds for?',
    content:
      'You can raise funds for any project you want (community project, business, art, sport, charity, etc.) except for projects where the act of raising funds or the purpose of the project is illegal.',
  },
] as const;

export { QUESTIONS };
