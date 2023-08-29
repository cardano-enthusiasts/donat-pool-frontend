const terms = [
  {
    term: 'Access',
    subTerms: [
      "You must be at least 14 years old to use the Services. If you are under 18 you must have your parent or legal guardian's permission to use the Services.",
      'It is forbidden to use the access credentials that do not belong to you.',
      'It is forbidden to share your access credentials with anybody. You are responsible for all activities that occur using your credentials.',
    ],
  },
  {
    term: 'Usage requirements',
    subTerms: [
      'We grant you access and the non-exclusive right to use the Services in accordance with these Terms.',
      'The use of these Services is prohibited if the use, purpose or methods of use violate the rights of any person.',
      'These Services are prohibited to use if the use, purpose or methods of use violate the laws of the country where the user is located.',
    ],
  },
  {
    term: 'Fees and Payments',
    subTerms: [
      'The Services charge a service fee for the use, which is paid by the project owner automatically when withdrawing the raised funds.',
      'The size of the service fees is set in the protocol parameters, the user must agree with the amount of the service fee when starting a fundraiser.',
      'Since the Services run on the Cardano blockchain, the user initiating the transaction must pay a transaction fee for each transaction. The amount of the transaction fee is calculated by the blockchain.',
    ],
  },
  {
    term: 'Confidentiality and Security',
    subTerms: [
      "The Services will not collect the user's browser information and will not share this information with third parties.",
      'Information provided by the user through our Services for the Cardano blockchain is available to all blockchain users.',
      'Information about transactions carried out through our Services on the Cardano blockchain is available to all blockchain users.',
      'The user is obliged to take all necessary measures to protect their credentials and devices from intruders.',
      "The Services will bear no responsibility and will not be able to refund cryptocurrency funds in case the user's credentials come into the hands of intruders.",
      'Users are obliged to take measures in order to ensure access to the current browser wallet during the use of the Services. Users will permanently lose access to their account if they lose access to the browser wallet. The Services are not responsible if users are unable to withdraw funds due to loss of access to their account.',
      "All donations are at the donor's own risk. When donors make a donation through our Services, it is their responsibility to understand how their money will be used. We do not and cannot verify the information that users or fundraisers supply, nor do we guarantee that the donations will be used in accordance with any donatPool purpose.",
    ],
  },
  {
    term: 'General Terms',
    subTerms: [
      'The Services and all related components and information are provided on an "as is" and "as available" basis without any warranties of any kind.',
      'We grant you a limited, non-exclusive, non-sublicensable, revocable, non-transferable license to access and use the Services on your devices and / or access or use any content that may be available through our Services.',
      'We are not responsible for the intentional or unintentional use of the Service for other purposes, as well as for the use of the Services in violation of the current terms of use.',
      'As we use third party services (light wallets, Ogmios, Kupo, etc.), we have no control over these services and are not liable for damage caused by third party services.',
      'Users agree that they are solely responsible for their interactions with any other user in connection with our Services and Donat.Pool will have no liability or responsibility with respect thereto. Donat.Pool reserves the right, but no obligation, to become involved in any way with disputes between users of the Services.',
    ],
  },
] as const;

export { terms };
