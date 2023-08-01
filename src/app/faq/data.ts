const basicSection = [
  {
    title:
      'Is it possible to edit a project title or other information after creating a project?',
    description:
      'Project title, amount to raise, project duration and creator&#39;s wallet - are immutable parameters that are stored in the Cardano blockchain, so it&#39;s impossible to edit these parameters.',
  },
  {
    title: 'What is the Donat.Pool service fee?',
    description:
      'Donat.Pool service fee is the fee that must be paid to the service after completing a fundraising project. The interest rate is established by the service protocol and the project owner has to agree with it while creating a project. The service fee interest rate is an immutable parameter so it cannot be changed after starting a project even if it was changed in the Donat.Pool protocol. The minimal fee is 2 Ada, so the final fee is counted as a maximum of 2 Ada or the actual percentage of the raised amount. Service fee is paid only once automatically when the project owner receives the raised funds.',
  },
  {
    title: 'Is it possible to donate to my own fundraising project?',
    description: 'Yes, there are no restrictions about it.',
  },
  {
    title: 'Is it possible to donate after a project deadline?',
    description:
      'No, the only possible action after the project deadline is to receive raised funds, it may be initiated by a project owner.',
  },
  {
    title: 'Is it possible to donate after raising a target amount?',
    description:
      'No, if the target amount is raised, the only possible action is to receive funds. In this case receiving funds is possible even if the deadline hasn&#39;t been reached.',
  },
  {
    title: 'Who can withdraw the raised funds?',
    description:
      'Only a project creator may receive the raised funds. Information about the creator&#39;s wallet address is recorded in the blockchain, so it&#39;s impossible to receive funds with different wallets. Remember that after creating a project you should keep an access to the current wallet, otherwise the funds stay locked on a script address forever. ',
  },
  {
    title: 'How to receive funds?',
    description:
      'It&#39;s possible to receive funds in two cases only: either if a deadline is reached or if the full amount is raised (or both). After fulfilling these conditions a project owner gets access to funds withdrawal.',
  },
  {
    title: 'Is the partial withdrawal possible? ',
    description:
      'No, a project owner can only withdraw the full amount at once.',
  },
  {
    title:
      'Does the service guarantee that the information provided by project owners is trustworthy?',
    description:
      'No, donors should be careful and support projects only if they get a project link from a reliable person (or service).',
  },

  {
    title: 'How many projects can I do on Donat.Pool?',
    description:
      'There are no restrictions on the number of projects you can create',
  },
  {
    title:
      'As a donor, can I get the info where the funds raised went? How can I be sure that the funds raised will be spent in the way it was mentioned in the project description?',
    description:
      'As a donor, you can trace the raised funds using the Cardano observer. But Donat.Pool can&#39;t guarantee that funds will be spent in the way it was mentioned in the project description. You should donate only to reliable project owners, so you should be confident that the resource shared with the donation link is trustworthy.',
  },
  {
    title:
      'What are the minimum and maximum fundraising periods? What maximum amount can I claim?',
    description:
      'Min and max periods, min and max amount, and Donat.Pool fee are dynamically changing parameters. They are regulated by governance token owners through the decentralized voting process.<br> Changes can affect only new projects. When you create a project you agree with current parameters (Min and max periods, min and max amount, and Donat.Pool fee) and they will be fixed for this project and can&#39;t be changed.',
  },
  {
    title: 'What happens to funds if I don&#39;t reach my goal?',
    description:
      'If your fundraising doesn&#39;t earn the target amount, at the end of the donation period you can receive the raised funds with the same conditions - fee for service will be based on the raised amount.',
  },
];

export { basicSection };
